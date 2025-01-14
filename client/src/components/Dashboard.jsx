import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Dashboard = () => {
  return (
    <>
      {/* nav bar */}
      <nav className='bg-gray-600 h-[80px] flex justify-center items-center'>
        <h2 className='text-white font-semibold text-[40px]'>
          Welcome to our dashboard
        </h2>
      </nav>
      <br />
      <div className='container mx-auto'>
        <Tabs>
          <TabList>
            <Tab>Add product</Tab>
            <Tab>All product</Tab>
          </TabList>

          {/* Add product */}
          <TabPanel>
            <h2>Add new product</h2>
            <br />

            <div>
              <div className='grid grid-cols-12 gap-[30px]'>
                <div className='col-span-4'>
                  <label className='text-[14px] font-bold'>Product name:</label>
                  <div className='relative'>
                    <input
                      className='w-full rounded-lg border border-gray-600 p-4 pe-12 text-sm shadow-sm '
                      type='text'
                    />
                  </div>
                </div>
                <div className='col-span-4'>
                  <label className='text-[14px] font-bold'>
                    Product price:
                  </label>
                  <div className='relative'>
                    <input
                      className='w-full rounded-lg border border-gray-600 p-4 pe-12 text-sm shadow-sm '
                      type='text'
                    />
                  </div>
                </div>
                <div className='col-span-4'>
                  <label className='text-[14px] font-bold'>
                    Product description:
                  </label>
                  <div className='relative'>
                    <input className='w-full rounded-lg border border-gray-600 p-4 pe-12 text-sm shadow-sm ' />
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-between mt-3'>
                <button
                  className='inline-block rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                  type='submit'
                >
                  Add product
                </button>
              </div>
            </div>
          </TabPanel>

          {/* All product */}
          <TabPanel>
            <>
              {/* component */}
              <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                  <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' className='px-16 py-3'>
                        <span className='sr-only'>Image</span>
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Product
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Qty
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Price
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                      <td className='p-4'>
                        <img
                          src='https://flowbite.com/docs/images/products/apple-watch.png'
                          className='w-16 md:w-32 max-w-full max-h-full'
                          alt='Apple Watch'
                        />
                      </td>
                      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                        Apple Watch
                      </td>
                      <td className='px-6 py-4'>
                        <div className='flex items-center'>
                          <button
                            className='inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                            type='button'
                          >
                            <span className='sr-only'>Quantity button</span>
                            <svg
                              className='w-3 h-3'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 18 2'
                            >
                              <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M1 1h16'
                              />
                            </svg>
                          </button>
                          <div>
                            <input
                              type='number'
                              id='first_product'
                              className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              placeholder={1}
                              required=''
                            />
                          </div>
                          <button
                            className='inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                            type='button'
                          >
                            <span className='sr-only'>Quantity button</span>
                            <svg
                              className='w-3 h-3'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 18 18'
                            >
                              <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M9 1v16M1 9h16'
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                        $599
                      </td>
                      <td className='px-6 py-4'>
                        <a
                          href='#'
                          className='font-medium text-red-600 dark:text-red-500 hover:underline'
                        >
                          Remove
                        </a>
                      </td>
                    </tr>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                      <td className='p-4'>
                        <img
                          src='https://flowbite.com/docs/images/products/imac.png'
                          className='w-16 md:w-32 max-w-full max-h-full'
                          alt='Apple iMac'
                        />
                      </td>
                      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                        iMac 27"
                      </td>
                      <td className='px-6 py-4'>
                        <div className='flex items-center'>
                          <button
                            className='inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                            type='button'
                          >
                            <span className='sr-only'>Quantity button</span>
                            <svg
                              className='w-3 h-3'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 18 2'
                            >
                              <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M1 1h16'
                              />
                            </svg>
                          </button>
                          <div className='ms-3'>
                            <input
                              type='number'
                              id='first_product'
                              className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              placeholder={1}
                              required=''
                            />
                          </div>
                          <button
                            className='inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                            type='button'
                          >
                            <span className='sr-only'>Quantity button</span>
                            <svg
                              className='w-3 h-3'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 18 18'
                            >
                              <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M9 1v16M1 9h16'
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                        $2499
                      </td>
                      <td className='px-6 py-4'>
                        <a
                          href='#'
                          className='font-medium text-red-600 dark:text-red-500 hover:underline'
                        >
                          Remove
                        </a>
                      </td>
                    </tr>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                      <td className='p-4'>
                        <img
                          src='https://flowbite.com/docs/images/products/iphone-12.png'
                          className='w-16 md:w-32 max-w-full max-h-full'
                          alt='iPhone 12'
                        />
                      </td>
                      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                        IPhone 12
                      </td>
                      <td className='px-6 py-4'>
                        <div className='flex items-center'>
                          <button
                            className='inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                            type='button'
                          >
                            <span className='sr-only'>Quantity button</span>
                            <svg
                              className='w-3 h-3'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 18 2'
                            >
                              <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M1 1h16'
                              />
                            </svg>
                          </button>
                          <div className='ms-3'>
                            <input
                              type='number'
                              id='first_product'
                              className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              placeholder={1}
                              required=''
                            />
                          </div>
                          <button
                            className='inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                            type='button'
                          >
                            <span className='sr-only'>Quantity button</span>
                            <svg
                              className='w-3 h-3'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 18 18'
                            >
                              <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M9 1v16M1 9h16'
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                        $999
                      </td>
                      <td className='px-6 py-4'>
                        <a
                          href='#'
                          className='font-medium text-red-600 dark:text-red-500 hover:underline'
                        >
                          Remove
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard;
