import React, { useEffect, useState } from 'react';
//import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
// import { DocumentViewer } from 'react-documents';
//import FileViewer from 'react-file-viewer';
import axios from "axios";
import '../App.css';

export interface DocumentViewerProps {
    sourceUrl: string;
}

interface IChunkRequest {
    Url: string;
    range?: string;
}

const DocumentViewerComponent: React.FC<DocumentViewerProps> = ({ sourceUrl }) => {
    const [doc, setDoc] = useState('');
    const docs = [
        { uri: 'https://github.com/ParthaSahu14/npm-registry-test/raw/master/npm-registry-consumer/testdocoument.pdf' },
        { uri: 'https://github.com/ParthaSahu14/npm-registry-test/raw/master/npm-registry-consumer/msexcel.xlsx' },
        { uri: 'https://github.com/ParthaSahu14/npm-registry-test/raw/master/npm-registry-consumer/jYVg-test-excelaki.xlsx' },
        { uri: 'https://github.com/ParthaSahu14/npm-registry-test/raw/master/npm-registry-consumer/FlooringEstimates.xlsx' },
        { uri: 'https://github.com/ParthaSahu14/npm-registry-test/raw/master/npm-registry-consumer/FinancialSample.xlsx' },
        { uri: 'https://github.com/ParthaSahu14/npm-registry-test/raw/master/npm-registry-consumer/testdocoument.pdf' },

        // { uri: 'http://localhost:3001/testmsword.docx' },
        // { uri: 'http://localhost:3001/msexcel.xlsx' },
        // { uri: 'http://localhost:3001/jYVg-test-excelaki.xlsx' },
        // { uri: 'http://localhost:3001/FlooringEstimates.xlsx' },
        // { uri: 'http://localhost:3001/FinancialSample.xlsx' },
        // { uri: 'http://localhost:3001/testdocoument.pdf' }
    ];

    useEffect(() => {
        // axios.get('http://localhost:3001/getfile', { responseType: 'blob' }).then((res) => {
        //     console.log(res);
        //     const file = new Blob(
        //         [res.data],
        //         { type: 'application/pdf' });
        //     //{ type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        //     //Build a URL from the file
        //     const fileURL = URL.createObjectURL(file);
        //     setDoc(fileURL);
        //     //Open the URL on new Window
        //     //window.open(fileURL);
        // });

        // axios.get('http://localhost:3003/previewdoc', { responseType: 'stream' }).then((res) => {
        //     console.log(res);
        //     // const file = new Blob(
        //     //     [res.data],
        //     //     { type: 'application/pdf' });
        //     // //{ type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        //     // //Build a URL from the file
        //     // const fileURL = URL.createObjectURL(file);
        //     setDoc(res.data);
        //     //Open the URL on new Window
        //     // window.open('https://sppartha.sharepoint.com/_layouts/15/download.aspx?UniqueId=a5f1dd90-e036-4bf5-b9f5-bdaac5992a0a&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvc3BwYXJ0aGEuc2hhcmVwb2ludC5jb21AZmQzYWVjNzgtYzU0My00NzNkLTkzNjktM2E5MDNkNWFiZmIyIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY1MDI2NjMxMSIsImV4cCI6IjE2NTAyNjk5MTEiLCJlbmRwb2ludHVybCI6IkVaMEo1SU03a1hWcUVpS2dZeWo2bmNNNVRKOGhmU0QzcGZjZDhRRFgwbm89IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTkiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6Ill6RXhOMll6TmpJdE5Ea3hOaTB4WXpNMUxXRTJaV0l0TkdGaFl6QTRNelUxTm1GbCIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJNV05sWkRnd01XRXRNRFl4TmkwME1UUXpMVGcxTkdRdE0ySm1ZMlF5WXpRMFlUaGgiLCJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBFeHBsb3JlciIsImdpdmVuX25hbWUiOiJQYXJ0aGFzYXJhdGhpIiwiZmFtaWx5X25hbWUiOiJTYWh1IiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJ0aWQiOiJmZDNhZWM3OC1jNTQzLTQ3M2QtOTM2OS0zYTkwM2Q1YWJmYjIiLCJ1cG4iOiJhZG1pbkBzcHBhcnRoYS5vbm1pY3Jvc29mdC5jb20iLCJwdWlkIjoiMTAwMzIwMDEzNzY0MkNEQSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAxMzc2NDJjZGFAbGl2ZS5jb20iLCJzY3AiOiJteWZpbGVzLnJlYWQgYWxsZmlsZXMucmVhZCBteWZpbGVzLndyaXRlIGFsbGZpbGVzLndyaXRlIGFsbHNpdGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZCIsInR0IjoiMiIsInVzZVBlcnNpc3RlbnRDb29raWUiOm51bGwsImlwYWRkciI6IjIwLjE5MC4xNDUuMTY5In0.d295clJmeXBLNlY4dWdzV0NBcUhtbVpwY2srMEN5dFFCUXNiU0JOMm5UMD0&ApiVersion=2.0', "_self");
        // });

        let chunkSize = 1024 * 1024 * 70;
        let chunks = Math.ceil(70422424 / chunkSize);
        let chunkEndpoints: IChunkRequest[] = [];
        let lastChunkByte = 0;
        for (let i = 0; i < chunks; i++) {
            let currentByte = 0;
            //chunkEndpoints.push({ Url: 'http://localhost:3003/download', range: `${i}-${currentByte}` });
            if (i == 0) {
                currentByte = chunkSize;
                chunkEndpoints.push({ Url: 'http://localhost:3003/download', range: `${i}-${currentByte}` });
            }
            else {
                currentByte = (i + 1) * chunkSize
                chunkEndpoints.push({ Url: 'http://localhost:3003/download', range: `${lastChunkByte}-${currentByte}` });
            }
            lastChunkByte = currentByte;
            // if (i == 1) {
            //     break;
            // }

        }
        console.log(chunkEndpoints);

        const options = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.all(chunkEndpoints.map((endpoint) => axios.post(endpoint.Url, { range: endpoint.range }, options)))
            .then(axios.spread((...responses) => {
                let fileByte: Array<Buffer> = [];
                var combined = new Uint8Array([]);
                responses.forEach(res => {
                    //fileByte = res.data
                    fileByte.push(res.data);

                });
                const concatenated = new Blob(fileByte, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                // .arrayBuffer().then(arrBuffer => {
                //     console.log(arrBuffer);
                // })
                const fileURL = URL.createObjectURL(concatenated);
                window.open(fileURL);
            }))
        // .then(
        //     (responses) => {
        //         let fileByte: string = '';
        //         responses.forEach(res => {
        //             //fileByte = res.data
        //             fileByte.concat(res.data);
        //         });
        //         console.log(fileByte);
        //         // const byteCharacters = atob(fileByte);
        //         // const byteNumbers = new Array(byteCharacters.length);
        //         // for (let i = 0; i < byteCharacters.length; i++) {
        //         //     byteNumbers[i] = byteCharacters.charCodeAt(i);
        //         // }
        //         // const byteArray = new Uint8Array(byteNumbers);
        //         // const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        //         // const fileURL = URL.createObjectURL(blob);
        //         // window.open(fileURL);
        //         // const file = new Blob(
        //         //     [fileByte],
        //         //     { type: 'application/pdf' });
        //         // //{ type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        //         // //Build a URL from the file
        //         // const fileURL = URL.createObjectURL(file);
        //         // setDoc(fileURL);
        //         // //Open the URL on new Window
        //         // //window.open(fileURL);
        //     }
        // );

    }, []);

    return (
        <>
            {/* {doc ? <iframe
                //src={"https://docs.google.com/viewer?url=" + sourceUrl + "&embedded=true"}
                src={doc}
                //src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(doc)}`}
                title="file"
                width="100%"
                height="600"
                allowFullScreen={true}
            ></iframe> : 'Loading document'} */}
            {/* <iframe
                //src={"https://docs.google.com/viewer?url=" + sourceUrl + "&embedded=true"}
                src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(sourceUrl)}`}
                title="file"
                width="100%"
                height="600"
                allowFullScreen={true}
            ></iframe> */}

            {/* <DocViewer
                pluginRenderers={DocViewerRenderers}
                documents={docs}
                theme={{
                    primary: "#5296d8",
                    secondary: "#0f0f0f",
                    tertiary: "#5296d899",
                    text_primary: "#0a0a0a",
                    text_secondary: "#5296d8",
                    text_tertiary: "#00000099",
                    disableThemeScrollbar: false,
                }}
            /> */}
            {/* <DocumentViewer
                url={"http://localhost:3001/testdocoument.pdf"}
                viewer="url"
                style={{ width: '100%', height: '50vh' }}
            /> */}

        </>
    );
}

export default DocumentViewerComponent;