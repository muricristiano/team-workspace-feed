import styles from './Avatar.module.css'

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar( {hasBorder = false, src, alt }: AvatarProps) {
  return (
    <div>
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src}
            alt={alt}
        />
    </div>
  )
}