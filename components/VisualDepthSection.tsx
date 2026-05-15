import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
import { PageSection, SectionHeading } from "@/components/MarketingSections";

type VisualDepthSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  variant: "home" | "emergency" | "coverage" | "services" | "pricing" | "contact";
};

export default function VisualDepthSection({
  eyebrow,
  title,
  description,
  variant,
}: VisualDepthSectionProps) {
  return (
    <PageSection surface>
      <div className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-center">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <ElectricalPhotoShowcase variant={variant} />
      </div>
    </PageSection>
  );
}
