import React, { useCallback, useState } from 'react'

interface MyPagePaginationProps {
  /** 페이지 이동을 위해 실행되는 함수를 설정 */
  onNavigate: (path: string) => void
  /** 페이지로 나눌 전체 아이템 갯수를 설정 */
  totalItemCount: number
  /** 한 페이지에 보여지는 아이템의 갯수를 설정 */
  listItemCount: number
  /** 페이지네이션 UI에 한번에 보여지는 페이지 갯수를 설정 */
  numberingCount?: number
  /** 페이지 외 필터, 정렬 등의 쿼리를 설정 */
  queries?: Record<string, string>
}

/** 컨텐츠를 여러 페이지로 나누어 보여주고, 사용자가 페이지 간 이동할 수 있는 인터페이스 요소 */
function Pagination({
  onNavigate,
  totalItemCount,
  numberingCount = 3,
  queries,
  listItemCount,
}: MyPagePaginationProps) {
  const getParameterByName = useCallback((name: string) => {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
      results = regex.exec(location.search)
    return results == null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '))
  }, [])

  const getChunk = useCallback((data: any = [], size = 1) => {
    const arr: any = []
    for (let i = 0; i < data.length; i += size) {
      arr.push(data.slice(i, i + size))
    }
    return arr
  }, [])

  const getQueries = useCallback((queries: Record<string, string>) => {
    let result = ''
    for (const key in queries) {
      result += `&${key}=${queries[key]}`
    }
    return result
  }, [])

  const currentPage = Number(getParameterByName('page'))
  const [page, setPage] = useState(currentPage || 1)

  const totalPage = Math.ceil(totalItemCount / listItemCount)
  const totalPageArr = Array.from({ length: totalPage }).map((_, i) => (
    <div
      key={i}
      className="cursor-pointer"
      onClick={() => {
        setPage(i + 1)
        onNavigate(`?page=${i + 1}${queries ? `${getQueries(queries)}` : ''}`)
      }}
    >
      <div
        className={`${page === i + 1 ? 'border-blue-600 text-blue-600' : 'border-transparent text-black'} flex size-6 items-center justify-center rounded-full border text-sm`}
      >
        {i + 1}
      </div>
    </div>
  ))

  const chunkedTotalPageArr = getChunk(totalPageArr, numberingCount)
  const numberingArrIndex = Math.floor((page - 1) / numberingCount)

  return (
    <div className="flex items-center justify-center gap-4 text-black">
      <div
        className="flex items-center"
        onClick={() => {
          setPage((prev) => prev - 1)
          onNavigate(
            `?page=${page - 1}${queries ? `${getQueries(queries)}` : ''}`,
          )
        }}
      >
        <button
          disabled={page === 1}
          className={`size-5 ${page === 1 && 'opacity-30'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-4">
        {chunkedTotalPageArr[numberingArrIndex]}
      </div>

      <div
        className="flex items-center"
        onClick={() => {
          setPage((prev) => prev + 1)
          onNavigate(
            `?page=${page + 1}${queries ? `${getQueries(queries)}` : ''}`,
          )
        }}
      >
        <button
          disabled={page === totalPage}
          className={`size-5 ${page === totalPage && 'opacity-30'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Pagination
