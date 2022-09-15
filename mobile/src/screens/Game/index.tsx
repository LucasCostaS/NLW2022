import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from './styles';
import { GameParams } from "../../@types/navigation";
import { FlatList, Image, TouchableOpacity, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { THEME } from "../../theme";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { useEffect, useState } from "react";



export function Game() {

  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();
  const [duos, setDuos] = useState<DuoCardProps[]>([])

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetch(`http://192.168.1.7:3333/games/${game.id}/ads`)
      .then(Response => Response.json())
      .then(data => setDuos(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />

          </TouchableOpacity>
          <Image
            source={logoImg}
            style={styles.logo} />
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode='cover'
        />

        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a Jogar!" />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item}
              onConnect={() => { }} />
          )}
          horizontal
          style={styles.containerList }
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContainer]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={()=>(
            <Text style={styles.emptyListText}>
              Não há Anúncios publicados ainda.

            </Text>
          )}
        />


      </SafeAreaView>
    </Background>
  );
}