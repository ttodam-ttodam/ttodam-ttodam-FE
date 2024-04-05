import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link to="/">
        <img src="/src/assets/logo.png" alt="Logo" className="w-40 h-40 mb-8" />
      </Link>
      <h1 className="text-3xl font-bold mb-10">회원가입</h1>

      <div className="relative w-[320px] mb-5">
        <input
          type="email"
          placeholder="이메일"
          className="border-b border-gray-500 focus:outline-none w-full py-2 pr-14"
        />
        <button className="absolute top-0 right-0 bg-primary text-white font-bold py-1 px-2 rounded w-22 h-9">
          이메일 인증
        </button>
      </div>

      <div className="relative w-[320px] mb-5">
        <input
          type="text"
          placeholder="인증코드"
          className="border-b border-gray-500 focus:outline-none w-full py-2 pr-14"
        />
        <button className="absolute top-0 right-0 bg-primary text-white font-bold py-1 px-2 rounded w-20 h-9">
          인증
        </button>
      </div>

      <input
        type="text"
        placeholder="닉네임"
        className="border-b mb-5 border-gray-500 focus:outline-none w-[320px] py-2 mb-4"
      />

      <input
        type="password"
        placeholder="비밀번호"
        className="border-b  border-gray-500 focus:outline-none w-[320px] py-2 mb-6"
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        className="border-b  border-gray-500 focus:outline-none w-[320px] py-2 mb-6"
      />

      <button className="bg-primary text-white px-6 py-3 rounded w-[320px] mb-2">가입하기</button>

      <div className="flex flex-col space-y-2">
        <button className="bg-yellow text-black px-6 py-3 rounded w-[320px]">카카오톡 로그인</button>
        <button className="bg-white border-black text-black border border-solid px-6 py-3 rounded w-[320px]">
          구글 로그인
        </button>
      </div>
    </div>
  );
}
