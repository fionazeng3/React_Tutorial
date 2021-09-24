import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*
useEffect: Allows function components to use something like lifecycle 
methods
we configure the hook to run some code automatically in one of the three scenarios:
1. when the component is rendered for the first time only
2. when the component is rendered for the first time and whenever it renders
3. when the component is rendered for the first time and whenever (it renders
and when some piece of data has changed)
*/

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    /*
    Second argument of useEffect can be:
    1. nothing: run at initial render and after every render
    2. empty array: run at initial render only
    3. array with elements: run at initial render, run after every render if data has changed

    clean up function:
    1. only thing that can be returned by useEffect function
    2. React call cleanup function first from the last invocation and then run the function
    */

    // we cannot use async and await keywords in the useEffect function

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                },
            });
            setResults(data.query.search);
        };
        if (term && !results.length) { // first time search: request immediately
            search();
        } else {
            // setTimeout() method sets a timer which execute a function or specified piece of
            // when the timer expires
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 500);

            return () => {
                clearTimeout(timeoutId);
            };

        }

    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    }
        // __html: XSS Attack : can be used to run maliciously injected html
        // only use this one with trusted contents



    )

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;