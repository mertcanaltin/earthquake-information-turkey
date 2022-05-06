import React from 'react'

const Card = ({ results }) => {
  let display;

  if (results) {
    display = results.map(x => {
      let { lokasyon, date, mag } = x

      return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            {lokasyon}
          </th>
          <td className="px-6 py-4">
            {date}
          </td>
          <td className="px-6 py-4">
            {mag}
          </td>
        </tr>
      )
    })
  } else {
    display = 'bulunamadı'
  }
  return (

    <div className="relative rounded-lg border-black overflow-x-auto shadow-md sm:rounded-lg mt-[2%]">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Lokasyon
            </th>
            <th scope="col" className="px-6 py-3">
              Tarih
            </th>
            <th scope="col" className="px-6 py-3">
              Büyüklük
            </th>
          </tr>
        </thead>
        <tbody>
          {display}
        </tbody>
      </table>
    </div>
  );
}

export default Card