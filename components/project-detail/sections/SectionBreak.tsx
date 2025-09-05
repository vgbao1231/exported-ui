import Image from 'next/image';

const SectionBreak = ({ data }: { data: string }) =>
  data && (
    <section className="w-full">
      <Image
        src={data}
        alt="Break Image"
        width={1920}
        height={1080}
        className="w-full h-auto"
        priority
      />
    </section>
  );

SectionBreak.displayName = 'SectionBreak';
export default SectionBreak;
