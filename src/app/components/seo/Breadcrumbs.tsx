import Link from 'next/link'
import styles from './Breadcrumbs.module.css'

type BreadcrumbItem = {
  name: string
  path: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className={styles.nav} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.path} className={styles.item}>
              {index > 0 && <span className={styles.sep} aria-hidden="true">/</span>}
              {isLast ? (
                <span className={styles.current} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className={styles.link}>
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
