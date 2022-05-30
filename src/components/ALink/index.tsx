import Link from 'next/link'

export default function ALink({ href, onClick, label, style, children }) {
  return (
    <Link href={href}>
      <>
        <a onClick={() => onClick()} style={style}>
          {label}
        </a>
        {children}
      </>
    </Link>
  )
}
