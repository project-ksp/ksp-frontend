import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen bg-mainBg">
      <div className="w-[280px] flex flex-col justify-between p-[28px] bg-primary">
        <div className="flex flex-col">
          <div className="flex items-center mb-[60px]">
            <div className="w-[35px] h-[40px] bg-filled-color rounded-md mr-[15px]"></div>
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-lg">KSP</h3>
              <p className="text-white font-regular text-base">
                Sentosa Makmur
              </p>
            </div>
          </div>
          <div className="bg-[#d9d9d9] mb-[16px] py-[14px] px-[16px] flex items-center rounded-md hover:bg-secondary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-[17px]"
            >
              <path
                d="M11.1111 6.66667V0H20V6.66667H11.1111ZM0 11.1111V0H8.88889V11.1111H0ZM11.1111 20V8.88889H20V20H11.1111ZM0 20V13.3333H8.88889V20H0ZM2.22222 8.88889H6.66667V2.22222H2.22222V8.88889ZM13.3333 17.7778H17.7778V11.1111H13.3333V17.7778ZM13.3333 4.44444H17.7778V2.22222H13.3333V4.44444ZM2.22222 17.7778H6.66667V15.5556H2.22222V17.7778Z"
                fill="black"
              />
            </svg>
            <p className="text-black text-base font-medium">Dashboard</p>
          </div>
          <div className="mb-[16px] py-[14px] px-[16px] flex items-center rounded-md hover:bg-secondary">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-[17px]"
            >
              <path
                d="M19.9923 4.76872L18.5648 0.48631C18.5152 0.338581 18.4185 0.211167 18.2896 0.123529C18.1607 0.0358913 18.0067 -0.00715311 17.8511 0.000970646H2.14892C1.99328 -0.00715311 1.83925 0.0358913 1.71037 0.123529C1.58149 0.211167 1.48484 0.338581 1.43518 0.48631L0.00771216 4.76872C-0.00257072 4.8445 -0.00257072 4.92133 0.00771216 4.99711V9.27952C0.00771216 9.46882 0.082909 9.65036 0.21676 9.78421C0.350611 9.91806 0.532153 9.99326 0.721447 9.99326H1.43518V17.1306H2.86265V9.99326H7.14506V17.1306H18.5648V9.99326H19.2786C19.4678 9.99326 19.6494 9.91806 19.7832 9.78421C19.9171 9.65036 19.9923 9.46882 19.9923 9.27952V4.99711C20.0026 4.92133 20.0026 4.8445 19.9923 4.76872ZM17.1373 15.7031H8.57253V9.99326H17.1373V15.7031ZM18.5648 8.56579H15.7099V5.71085H14.2824V8.56579H10.7137V5.71085H9.28627V8.56579H5.71759V5.71085H4.29012V8.56579H1.43518V5.11131L2.66281 1.42844H17.3372L18.5648 5.11131V8.56579Z"
                fill="#F8FAFC"
              />
            </svg>
            <p className="text-white text-base font-medium">Data Master</p>
          </div>
          <div className="mb-[16px] py-[14px] px-[16px] flex items-center rounded-md hover:bg-secondary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-[17px]"
            >
              <path
                d="M11.2109 11.25C10.6706 10.8464 10.0879 10.5371 9.46289 10.3223C8.83789 10.1074 8.18359 10 7.5 10C6.92708 10 6.3737 10.0749 5.83984 10.2246C5.30599 10.3743 4.80794 10.5827 4.3457 10.8496C3.88346 11.1165 3.46354 11.4421 3.08594 11.8262C2.70833 12.2103 2.38281 12.6335 2.10938 13.0957C1.83594 13.5579 1.62435 14.056 1.47461 14.5898C1.32487 15.1237 1.25 15.6771 1.25 16.25H0C0 15.4688 0.113932 14.7168 0.341797 13.9941C0.569661 13.2715 0.898438 12.6042 1.32812 11.9922C1.75781 11.3802 2.26562 10.8366 2.85156 10.3613C3.4375 9.88607 4.10156 9.51172 4.84375 9.23828C4.47917 9.01042 4.15365 8.74349 3.86719 8.4375C3.58073 8.13151 3.33333 7.79297 3.125 7.42188C2.91667 7.05078 2.76367 6.66341 2.66602 6.25977C2.56836 5.85612 2.51302 5.4362 2.5 5C2.5 4.3099 2.63021 3.66211 2.89062 3.05664C3.15104 2.45117 3.50911 1.92383 3.96484 1.47461C4.42057 1.02539 4.95117 0.667318 5.55664 0.400391C6.16211 0.133464 6.8099 0 7.5 0C8.1901 0 8.83789 0.130208 9.44336 0.390625C10.0488 0.651042 10.5762 1.00911 11.0254 1.46484C11.4746 1.92057 11.8327 2.45117 12.0996 3.05664C12.3665 3.66211 12.5 4.3099 12.5 5C12.5 5.42969 12.4479 5.84961 12.3438 6.25977C12.2396 6.66992 12.0833 7.05729 11.875 7.42188C11.6667 7.78646 11.4193 8.12175 11.1328 8.42773C10.8464 8.73372 10.5176 9.00391 10.1465 9.23828C10.5371 9.38802 10.9049 9.5638 11.25 9.76562V11.25H11.2109ZM3.75 5C3.75 5.52083 3.84766 6.00586 4.04297 6.45508C4.23828 6.9043 4.50521 7.30143 4.84375 7.64648C5.18229 7.99154 5.57943 8.26172 6.03516 8.45703C6.49089 8.65234 6.97917 8.75 7.5 8.75C8.01432 8.75 8.49935 8.65234 8.95508 8.45703C9.41081 8.26172 9.80794 7.99479 10.1465 7.65625C10.485 7.31771 10.7552 6.92057 10.957 6.46484C11.1589 6.00911 11.2565 5.52083 11.25 5C11.25 4.48568 11.1523 4.00065 10.957 3.54492C10.7617 3.08919 10.4948 2.69206 10.1562 2.35352C9.81771 2.01497 9.41732 1.74479 8.95508 1.54297C8.49284 1.34115 8.00781 1.24349 7.5 1.25C6.97917 1.25 6.49414 1.34766 6.04492 1.54297C5.5957 1.73828 5.19857 2.00521 4.85352 2.34375C4.50846 2.68229 4.23828 3.08268 4.04297 3.54492C3.84766 4.00716 3.75 4.49219 3.75 5ZM20 12.5V20H10V12.5H12.5V10H17.5V12.5H20ZM13.75 12.5H16.25V11.25H13.75V12.5ZM18.75 16.25H17.5V17.5H16.25V16.25H13.75V17.5H12.5V16.25H11.25V18.75H18.75V16.25ZM18.75 13.75H11.25V15H18.75V13.75Z"
                fill="#F8FAFC"
              />
            </svg>
            <p className="text-white text-base font-medium ">Account Block</p>
          </div>
        </div>
        <div className="flex flex-col mb-[30px]">
          <button className="bg-white/10  mb-[16px] py-[14px] px-[16px] flex items-center rounded-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-[12px]"
            >
              <path
                d="M8.3335 16.1673L12.5002 12.0007L8.3335 7.83398"
                stroke="white"
                strokeWidth="2"
                strokeLineCap="round"
                strokeLineJoin="round"
              />
              <path
                d="M12.5 12H2.5"
                stroke="white"
                strokeWidth="2"
                strokeLineCap="round"
                strokeLineJoin="round"
              />
              <path
                d="M12.5 4.5H15.8333C16.2754 4.5 16.6993 4.67559 17.0118 4.98816C17.3244 5.30072 17.5 5.72464 17.5 6.16667V17.8333C17.5 18.2754 17.3244 18.6993 17.0118 19.0118C16.6993 19.3244 16.2754 19.5 15.8333 19.5H12.5"
                stroke="white"
                strokeWidth="2"
                strokeLineCap="round"
                strokeLineJoin="round"
              />
            </svg>
            <p className="text-mainBg text-base font-bold">Keluar</p>
          </button>
          <button className="flex items-center border-t border-white/10 py-[5px] justify-between">
            <div className="flex items-center">
              <Image
                src={"/images/Image.png"}
                alt="image"
                width={32}
                height={32}
                className="mr-[12px]"
              />
              <div className="flex flex-col items-start">
                <p className="text-white text-base font-semibold ">Teller</p>
                <p className="text-white text-sm font-regular">Indah sari</p>
              </div>
            </div>
            <svg
              width="4"
              height="20"
              viewBox="0 0 4 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="white" />
              <circle cx="2" cy="10" r="2" fill="white" />
              <circle cx="2" cy="18" r="2" fill="white" />
            </svg>
          </button>
        </div>
      </div>
      <div></div>
    </main>
  );
}
