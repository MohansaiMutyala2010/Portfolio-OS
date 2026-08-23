import { experienceStats } from "../data";

import {
  Stats,
  StatCard,
  StatIcon,
  StatValue,
  StatLabel,
} from "./styles";

const ExperienceStats = () => {
  return (
    <Stats>

      {experienceStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <StatCard key={stat.id}>

            <StatIcon>
              <Icon />
            </StatIcon>

            <div>
              <StatValue>
                {stat.value}
              </StatValue>

              <StatLabel>
                {stat.label}
              </StatLabel>
            </div>

          </StatCard>
        );
      })}

    </Stats>
  );
};

export default ExperienceStats;