import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import myPdf from '../../storage/SRS.pdf';
// import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './style.css';

function ViewPdf({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(14);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="wrapper__view__pdf flex h-full">
      <div className="infomation w-[35%] h-full">
        <h1 className="font-bold text-2xl pb-4">Detail Information</h1>
        <ul className="list__information">
          <li className="item__information">
            <strong>Keyword:</strong> srs document
          </li>
          <li className="item__information">
            <strong>Filename:</strong> {file?.filename || 'abc.pdf'}
          </li>
          <li className="item__information">
            <strong>Author:</strong> {file?.upload_mail || 'quangkhanh'}
          </li>
          <li className="item__information">
            <strong>Uploaded:</strong> {file?.create_on || 'date: 20-10-23'}
          </li>
          <li className="item__information">
            <strong>Title:</strong> no title
          </li>
          <li className="item__information">
            <strong>Intro:</strong> no intro
          </li>
          <li className="item__information">
            <strong>Views:</strong> 2023
          </li>
        </ul>
      </div>
      <div className="pdf-div">
        <Document file={myPdf} onLoadSuccess={onDocumentLoadSuccess} className="w-full">
          {Array.apply(null, Array(numPages))
            // Array.apply(null, Array(1))
            .map((x, i) => i + 1)
            .map((page) => {
              return <Page className="flex w-full" pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />;
            })}
        </Document>

        {/* <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber(pageNumber - 1)}
          className="border-solid border-2 border-indigo-600 "
        >
          Previous
        </button>
        <button onClick={() => setPageNumber(pageNumber + 1)} className="border-solid border-2 border-indigo-600">
          Next
        </button> */}
      </div>
    </div>
  );
}

export default ViewPdf;
