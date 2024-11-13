"use client"

import { useGetWindowScrollPosition } from '@/helpers/use-get-window-scroll-position'
import Header from '../landing/Header'

const ListHeader = () => {
const { y } = useGetWindowScrollPosition();
const className = y < 300 ? "sticky top-0 bg-white" : ""

  return (
    <Header className={className} />
  )
}

export default ListHeader