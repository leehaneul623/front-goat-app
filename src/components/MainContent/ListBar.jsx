import React from 'react'

const ListBar = () => {
  return (
    <div className="flex w-full h-[50px] bg-[#E0D9D2] flex-row">
      <div className="w-[1280px] m-auto">
        <button className="ml-[370px]">
          <b>실시간 리스트</b>
        </button>
        <button className="ml-10">
          <b>인기 리스트</b>
        </button>
      </div>
    </div>
  )
}

export default ListBar
