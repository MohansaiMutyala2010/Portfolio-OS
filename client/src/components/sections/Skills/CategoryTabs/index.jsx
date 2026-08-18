import {
  Tabs,
  TabButton,
  TabIcon,
  TabName,
} from "./styles";

const CategoryTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <Tabs>
      {categories.map((category) => {
        const Icon = category.icon;

        const isActive =
          activeCategory === category.id;

        return (
          <TabButton
            key={category.id}
            type="button"
            $active={isActive}
            onClick={() =>
              onCategoryChange(category.id)
            }
            aria-pressed={isActive}
          >
            <TabIcon $active={isActive}>
              <Icon />
            </TabIcon>

            <TabName>
              {category.name}
            </TabName>
          </TabButton>
        );
      })}
    </Tabs>
  );
};

export default CategoryTabs;