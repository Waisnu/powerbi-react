// import { useState, useEffect, useCallback } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { PowerBIEmbed } from 'powerbi-client-react';
import { Embed, models, Report } from 'powerbi-client';
import './App.css';

function App() {


    const getEmbeddedComponent = (embeddedComponent: Embed) => {
        const embeddedReport = embeddedComponent as Report;
        console.log('Embedded report:', embeddedReport);
    };

    return (
        <>
            <div>
                <a
                    href='https://vitejs.dev'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a
                    href='https://react.dev'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </a>
            </div>
            <h1>Vite + React + TypeScript + PowerBI</h1>
            <h5>
                Created by {''}
                <a
                    href='https://vinfolio.me/'
                    target='_blank'
                    style={{ color: 'red' }}
                >
                    Vince
                </a>
                , this simple, blazingly fast PowerBI embedded dashboard API is
                designed to provide a more convenient and accessible way to
                showcase data analysis to users. Source code:
                <a
                    href='https://github.com/Waisnu/powerbi-react'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        marginLeft: '8px',
                    }}
                >
                    <img
                        src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                        alt='GitHub'
                        style={{ width: '35px', height: '35px' }}
                    />
                </a>
            </h5>

            <PowerBIEmbed
                embedConfig={{
                    type: 'report', // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                    id: '7446294a-e958-40f1-ac14-c98992022165',
                    embedUrl:
                        'https://app.powerbi.com/reportEmbed?reportId=7446294a-e958-40f1-ac14-c98992022165&groupId=3a6fbd36-3969-446d-aced-425b2a485965&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d',
                    accessToken: import.meta.env.VITE_POWERBI_ACCESS_TOKEN,   
                    tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
                    settings: {
                        panes: {
                            filters: {
                                expanded: false,
                                visible: false,
                            },
                        },
                        background: models.BackgroundType.Transparent,
                    },
                }}
                eventHandlers={
                    new Map([
                        [
                            'loaded',
                            function () {
                                console.log('Report loaded');
                            },
                        ],
                        [
                            'rendered',
                            function () {
                                console.log('Report rendered');
                            },
                        ],
                        [
                            'error',
                            function (event) {
                                console.log(event?.detail);
                            },
                        ],
                        ['visualClicked', () => console.log('visual clicked')],
                        ['pageChanged', (event) => console.log(event)],
                    ])
                }
                cssClassName='reportClass'
                getEmbeddedComponent={getEmbeddedComponent}
            />
        </>
    );
}

export default App;
