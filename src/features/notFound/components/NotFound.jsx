import Image from 'next/image';
import Link from 'next/link';
import s from './styles.module.scss';

export default function NotFoundPage() {
  return (
    <div className={s.container}>
      <h1>Сторінку не знайдено</h1>
      <p>Можливо, вона була видалена або переміщена.</p>
      <div className={s.imageWrapper}>
        <Image
          src="/images/not_found-1.jpg"
          alt="Page not found"
          width={300}
          height={300}
        />
      </div>
      <Link href="/" className={s.link}>
        На головну
      </Link>
    </div>
  );
}
