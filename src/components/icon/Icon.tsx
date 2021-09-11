import { useRef, useEffect, useState } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  alt: string;
}

const Icon: React.FC<IconProps> = ({ name, ...rest }): JSX.Element | null => {
  const importedIconRef = useRef<
    React.FC<React.SVGProps<SVGSVGElement>>
  >();
  const [loading, setLoading] = useState(false);
  useEffect((): void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        // see https://github.com/facebook/create-react-app/issues/5276#issuecomment-665628393
        importedIconRef.current = (await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!./assets/${name}`)).default;
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && importedIconRef.current) {
    const { current: ImportedIcon } = importedIconRef;
    return <ImportedIcon {...rest} />;
  }
  return null;
};

export default Icon;