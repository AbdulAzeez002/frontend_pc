import React, { Fragment, useEffect, useState } from "react";
import { getAllBooks } from "../../services/services";
import BookDetails from "../BookDetails/BookDetails";

const Books = ({userId}) => {
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedBook,setSelectedBook]=useState()

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const books = await getAllBooks();
      if (books) {
        setBooks(books);
      }
    } catch (error) {
      console.log(error, "error while fetching books");
    }
  };

  const handleViewBook=(book)=>{
    setSelectedBook(book)
    setOpen(true)
  }
  return (
    <>
      <div className="px-10 pt-10 ">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  No of Copies
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {books &&
                books?.map((book) => (
                  <Fragment key={book?._id}>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {book?.BookID}
                      </th>
                      <td className="px-6 py-4">{book?.BookName}</td>
                      <td className="px-6 py-4">{book?.NumberOfCopies}</td>
                      <td className="px-6 py-4">
                        <div>
                          <button
                            class="bg-rose-800 hover:bg-rose-900 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleViewBook(book)}
                          >
                            View
                          </button>
                        </div>
                      </td>
                    </tr>
                  </Fragment>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {open && <BookDetails open={open} setOpen={setOpen} selectedBook={selectedBook} userId={userId}/>}
    </>
  );
};

export default Books;
