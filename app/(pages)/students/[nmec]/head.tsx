export default function Head({
  params: { nmec },
}: {
  params: { nmec: string };
}) {
  return (
    <>
      <title>{`Student ${nmec}`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
