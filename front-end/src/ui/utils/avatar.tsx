import Image from 'next/image'

export function Avatar({ src }: { src: string }) {
  return (
    <Image
      className="rounded-full object-cover min-w-14 min-h-14 max-h-12 max-w-12 border-2 border-secundary"
      src={src}
      alt="Avatar do usuário"
      width={128}
      height={128}
    />
  )
}
