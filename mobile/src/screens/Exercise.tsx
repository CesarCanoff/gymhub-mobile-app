import { TouchableOpacity } from "react-native";
import { HStack, Heading, ScrollView, Icon, Text, VStack, Image, Box } from "native-base";

import { Feather } from "@expo/vector-icons";

import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";

export function Exercise() {
  const { goBack } = useNavigation<AppNavigatorRoutesProps>();

  const handleGoBack = () => goBack();

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon
            as={Feather}
            color="yellow.500"
            name="arrow-left"
            size={6}
          />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          mt={4}
          mb={8}
          alignItems="center"
        >
          <Heading color="gray.100" fontSize="lg" flexShrink={1}>
            Push-up
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              Arms
            </Text>
          </HStack>
        </HStack>
      </VStack>
      
      <ScrollView>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            source={{ uri: 'https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg' }}
            alt="Push-up"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml={2}>6 series</Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml={2}>8 reps</Text>
              </HStack>
            </HStack>

            <Button title="Finish" variant="solid" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}