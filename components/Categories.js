import { ScrollView, Text, View } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Testing1' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Testing2' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Testing3' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Testing3' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Testing3' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Testing3' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Testing3' />
    </ScrollView>
  )
}

export default Categories