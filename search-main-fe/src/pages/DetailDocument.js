import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import app from '../firebase';
import { getDocument } from '@/services/homeServices';
import Layout from '@/components/layout/Layout';
import FilesList from '@/components/file/FilesList';
import FileItem from '@/components/file/FileItem';
import Pagination from '@/components/paginantion/Pagination';
import Searching from '@/components/search/Searching';
import Searchingg from '@/components/search/Searchingg';
import ViewPdf from '@/components/search/ViewPdf';
import { useLocation } from 'react-router-dom';

import { storeLocal } from '@store';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

export default function DetailDocument() {
  const location = useLocation();
  // const { state } = location;
  const { filename, category } = location.state || {};

  // Sử dụng state từ URL
  console.log('State', { filename }); // In ra state để kiểm tra trong console

  return (
    <>
      <dialog id="my_modal_loading_page" className="modal">
        <div className="w-auto h-auto modal-box text-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </dialog>
      <Layout active={1}>
        <div className="mx-5 py-2 h-full">
          <ViewPdf />
        </div>
      </Layout>
    </>
  );
}
