
import SkillsHeatmap from '../hr/skills-heatmap';

const HRComponentsSection = () => {
  return (
    <section className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Composants RH</h2>
      
      {/* Skills Heatmap - Full Width */}
      <div className="mb-8">
        <SkillsHeatmap className="hover-lift" />
      </div>
    </section>
  );
};

export default HRComponentsSection;