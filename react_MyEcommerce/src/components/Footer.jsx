import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-white">Tar Shop</h3>
            <p className="mt-2 text-sm text-gray-300">ขอบคุณลูกค้าที่มาอุดหนุนครับ</p>
          </div>

          <div className="md:w-1/3 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-white">สำรวจ</h4>
              <ul className="mt-2 text-sm text-gray-300 space-y-1">
                <li><a href="#" className="hover:text-white">หน้าแรก</a></li>
                <li><a href="#" className="hover:text-white">เกี่ยวกับ</a></li>
                <li><a href="#" className="hover:text-white">บริการ</a></li>
                <li><a href="#" className="hover:text-white">ติดต่อ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white">ติดต่อ</h4>
              <ul className="mt-2 text-sm text-gray-300 space-y-1">
                <li>อีเมล: hello@example.com</li>
                <li>โทร: +66 2 000 0000</li>
                <li>ที่อยู่: กรุงเทพฯ, ประเทศไทย</li>
              </ul>
            </div>
          </div>

          <div className="md:w-1/3">
            <h4 className="font-medium text-white">ติดตามเรา</h4>
            <div className="mt-3 flex space-x-3">
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.923 4.923 0 0 0 4.6 3.417A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.01-7.514 14.01-14.02 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 2.9-.39c.99.01 1.99.13 2.92.39 2.2-1.5 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.84 1.19 3.1 0 4.45-2.71 5.43-5.29 5.71.42.36.8 1.07.8 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Porpao Shop. สงวนลิขสิทธิ์.
        </div>
      </div>
    </footer>
  )
}

export default Footer