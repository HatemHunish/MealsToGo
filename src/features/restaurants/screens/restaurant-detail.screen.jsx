import { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
const MENU_ACCORDIONS = {
  breakfast: {
    label: 'Breakfast',
    status: false,
    icon: 'bread-slice',
    items: ['Eggs Benedict', 'Classic Breakfast'],
  },
  lunch: {
    label: 'Lunch',
    status: false,
    icon: 'hamburger',
    items: ['Burger w/ Fries', 'Steak Sandwich', 'Mushroom Soup'],
  },
  dinner: {
    label: 'Dinner',
    status: false,
    icon: 'food-variant',
    items: ['Spaghetti Bolognese', 'Veal Cutlet with Chicken Mushroom Rotini', 'Steak Frites'],
  },
  drinks: {
    label: 'Drinks',
    status: false,
    icon: 'cup',
    items: ['Coffee', 'Tea', 'Modelo', 'Coke', 'Fanta'],
  },
};

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [menuAccordions, setMenuAccordions] = useState(MENU_ACCORDIONS);

  const handleOpenCloseAccordion = (key) => {
    setMenuAccordions((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        status: !prevState[key].status,
      },
    }));
  };
  return (
    <SafeAreaContainer>
      <ScrollView>
        <RestaurantInfoCard restaurant={restaurant} />
        {Object.keys(MENU_ACCORDIONS).map((key) => (
          <List.Accordion
            key={key}
            title={menuAccordions[key].label}
            left={(props) => <List.Icon {...props} icon={menuAccordions[key].icon} />}
            expanded={menuAccordions[key].status}
            onPress={() => handleOpenCloseAccordion(key)}
          >
            {menuAccordions[key].items.map((item, index) => (
              <List.Item key={index} title={item} />
            ))}
          </List.Accordion>
        ))}
      </ScrollView>
    </SafeAreaContainer>
  );
};
