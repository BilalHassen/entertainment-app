export default function DynamicImage({ src, alt, height, width, name }) {
  return (
    <>
      <img className={name} src={src} alt={alt} height={height} width={width} />
    </>
  );
}
