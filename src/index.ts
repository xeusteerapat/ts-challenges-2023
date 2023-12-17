import { writeFile } from 'fs/promises';

const main = async () => {
  const dir = 'src/aot-2023';
  const files = Array.from(
    { length: 25 },
    (_, i) => `${dir}/aot-day${i < 10 ? `0` : ``}${i + 1}.ts`
  );

  await Promise.all(files.map(file => writeFile(file, '')));
};

main().catch(err => {
  console.error(err);
  process.exit(1);
});
