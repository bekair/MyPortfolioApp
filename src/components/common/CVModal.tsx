import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaTimes, FaDownload } from 'react-icons/fa';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const isMobile = window.innerWidth < 768; // md breakpoint

  useEffect(() => {
    if (isMobile) {
      import('pdfjs-dist/build/pdf.worker.entry');
    }
  }, [isMobile]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => Math.min(Math.max(1, prevPageNumber + offset), numPages || 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed z-50 inset-x-0 bottom-0 md:inset-16 md:bottom-auto"
          >
            <div className={`relative w-full max-w-4xl mx-auto h-[90vh] md:h-auto ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } rounded-t-xl md:rounded-xl shadow-2xl overflow-hidden`}
            >
              <div className={`flex items-center justify-between p-4 border-b ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="flex items-center gap-4">
                  <h2 className={`text-lg font-semibold ${
                    theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    Curriculum Vitae
                  </h2>
                  {isMobile && (
                    <a
                      href="/CV - Bekir Can Baykal (15.01.2025).pdf"
                      download="CV - Bekir Can Baykal.pdf"
                      className={`flex items-center gap-1 px-2 py-1 rounded text-sm ${
                        theme === 'dark' 
                          ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      <FaDownload size={14} />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {isMobile && (
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {pageNumber} of {numPages}
                    </span>
                  )}
                  <button
                    onClick={onClose}
                    className={`p-2 rounded-full ${
                      theme === 'dark' ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
                    } transition-colors`}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              <div className="h-[calc(90vh-4rem)] md:h-[75vh] w-full overflow-auto p-4">
                {isMobile ? (
                  <>
                    <Document
                      file="/CV - Bekir Can Baykal (15.01.2025).pdf"
                      onLoadSuccess={onDocumentLoadSuccess}
                      className="flex flex-col items-center"
                    >
                      <Page 
                        pageNumber={pageNumber} 
                        width={Math.min(window.innerWidth * 0.9, 800)}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </Document>
                    <div className="flex justify-center items-center gap-4 mt-4">
                      <button
                        onClick={() => changePage(-1)}
                        disabled={pageNumber <= 1}
                        className={`px-4 py-2 rounded ${
                          pageNumber <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                        }`}
                      >
                        Previous
                      </button>
                      <span>{pageNumber} of {numPages}</span>
                      <button
                        onClick={() => changePage(1)}
                        disabled={pageNumber >= (numPages || 1)}
                        className={`px-4 py-2 rounded ${
                          pageNumber >= (numPages || 1) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                        }`}
                      >
                        Next
                      </button>
                    </div>
                  </>
                ) : (
                  <iframe
                    src="/CV - Bekir Can Baykal (15.01.2025).pdf#zoom=67"
                    className="w-full h-full"
                    title="CV"
                  />
                )}
              </div>

              <div className="md:hidden p-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={onClose}
                  className="w-full py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CVModal; 