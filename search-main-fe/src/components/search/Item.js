import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaRegFilePdf } from "react-icons/fa";


export default function Item({category, filename, list}) {
  return (
    <>
      <div className="p-2 m-4 border border-gray-300 rounded-md shadow-md">
        {/* <div className="font-bold mb-2">Kind: {category}</div> */}
        <div className="ml-2 text-black mb-2">
          <FaRegFilePdf className='inline-block'/>
          <div className='inline-block font-bold ml-2'>{filename}</div>
        </div>
        {list.map((item, index) => (
          <div className="rounded-md px-2 py-1 hover:text-gray-500 text-black" key={index}>
            <Link
                    to={{
                      pathname: '/detail-document',
                      state: {
                        filename: item.filename,
                      }
                    }}
                    style={{cursor: 'pointer' }}
                  >
                    <span>
                      {item}
                    </span>
                  </Link>
          </div>
        ))}
      </div>
    </>
  );
}