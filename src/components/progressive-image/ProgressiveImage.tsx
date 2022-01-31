interface SourceAttributes {
  media?: string;
  sizes?: string;
  src?: string;
  srcSet?: string;
  type?: string;
}

interface ImageProp {
  sources: SourceAttributes[];
  alt: string;
  style?: {};
  className?: string;
  crossOrigin?: "anonymous" | "use-credentials" | "";
  decoding?: "async" | "auto" | "sync";
  loading?: "eager" | "lazy";
  referrerPolicy?: "no-referrer" | "origin" | "unsafe-url";
  sizes?: string;
  src?: string;
  srcSet?: string;
  width?: number | string;
  height?: number | string;
}

function ProgressiveImage(props: ImageProp) {
  const { sources, ...defaultProps } = props;
  return (
    <picture>
      { sources.map(({...delegate}) => 
        <source {...delegate} key={delegate.type} />
      )}
      <img {...defaultProps} />
    </picture>
  );
}

export default ProgressiveImage;
