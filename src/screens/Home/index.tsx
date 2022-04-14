import React, { useState, useRef, useEffect } from 'react'
import { FlatList, View, ScrollView, LogBox } from 'react-native'
import Modal from 'react-native-modal'
import { Modalize } from 'react-native-modalize'

import {
  aberturaOcular,
  respostaMotora,
  respostaPupilar,
  respostaVerbal
} from '../../utils/optionsGlasgow'
import {
  Container,
  Header,
  Title,
  Form,
  Button,
  ButtonSelect,
  Option,
  Icon,
  GlasgowOptions,
  NameOptions,
  Separator,
  HeaderModal,
  Footer,
  ButtonText,
  Label,
  ContainerModal,
  TitleModal,
  TextModal
} from './styles'

export function Home() {
  const [aberturaEscore, setAberturaEscore] = useState(1)
  const [respostaMotoraEscore, setRespostaMotoraEscore] = useState(1)
  const [respostaVerbalEscore, setRespostaVerbalEscore] = useState(1)
  const [respostaPupilarEscore, setRespostaPupilarEscore] = useState(0)
  const [resultadoFinal, setResultadoFinal] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)

  const refModalAberturaOcular = useRef(null)
  const refModalRespostaMotora = useRef(null)
  const refModalRespostaPupilar = useRef(null)
  const refModalRespostaVerbal = useRef(null)

  const handleOpenModalAbertura = () => {
    refModalAberturaOcular.current.open()
  }

  const handleCloseModalAbertura = () => {
    refModalAberturaOcular.current.close()
  }

  const handleOpenModalRespostaMotora = () => {
    refModalRespostaMotora.current.open()
  }

  const handleCloseModalRespostaMotora = () => {
    refModalRespostaMotora.current.close()
  }

  const handleOpenModalRespostaPupilar = () => {
    refModalRespostaPupilar.current.open()
  }

  const handleCloseModalRespostaPupilar = () => {
    refModalRespostaPupilar.current.close()
  }

  const handleOpenModalRespostaVerbal = () => {
    refModalRespostaVerbal.current.open()
  }

  const handleCloseModalRespostaVerbal = () => {
    refModalRespostaVerbal.current.close()
  }

  const showResults = () => {
    const resultado =
      aberturaEscore + respostaMotoraEscore + respostaVerbalEscore - respostaPupilarEscore
    setResultadoFinal(resultado)
    setModalVisible(!modalVisible)
  }

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  }, [])

  return (
    <Container>
      <Header>
        <Title> Escala de Glasgow </Title>
      </Header>
      <Form>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Label>Abertura Ocular</Label>
          <ButtonSelect onPress={handleOpenModalAbertura}>
            <Option>
              {aberturaEscore === 0
                ? 'Abertura Ocular'
                : aberturaEscore === 1
                ? 'Nenhuma'
                : aberturaEscore === 2
                ? 'À Dor'
                : aberturaEscore === 3
                ? 'À Voz'
                : aberturaEscore === 4
                ? 'Espontânea'
                : 'Abertura Ocular'}
            </Option>
            <Icon name="chevron-down" />
          </ButtonSelect>
          <Label>Resposta Motora</Label>
          <ButtonSelect onPress={handleOpenModalRespostaMotora}>
            <Option>
              {respostaMotoraEscore === 0
                ? 'Resposta Motora'
                : respostaMotoraEscore === 1
                ? 'Nenhuma'
                : respostaMotoraEscore === 2
                ? 'Extensão Anormal'
                : respostaMotoraEscore === 3
                ? 'Flexão Anormal'
                : respostaMotoraEscore === 4
                ? 'Movimentos de Retirada'
                : respostaMotoraEscore === 5
                ? 'Localiza a Dor'
                : respostaMotoraEscore === 6
                ? 'Obedece a comandos'
                : 'Resposta Motora'}
            </Option>
            <Icon name="chevron-down" />
          </ButtonSelect>
          <Label>Resposta Verbal</Label>
          <ButtonSelect onPress={handleOpenModalRespostaVerbal}>
            <Option>
              {respostaVerbalEscore === 0
                ? 'Resposta Verbal'
                : respostaVerbalEscore === 1
                ? 'Nenhuma'
                : respostaVerbalEscore === 2
                ? 'Palavras Incompreensíveis'
                : respostaVerbalEscore === 3
                ? 'Palavras Inapropriadas'
                : respostaVerbalEscore === 4
                ? 'Confusa'
                : respostaVerbalEscore === 5
                ? 'Orientada'
                : 'Resposta Verbal'}
            </Option>
            <Icon name="chevron-down" />
          </ButtonSelect>
          <Label>Resposta Pupilar</Label>
          <ButtonSelect onPress={handleOpenModalRespostaPupilar}>
            <Option>
              {respostaPupilarEscore === 0
                ? 'Reação bilateral ao estímulo'
                : respostaPupilarEscore === 1
                ? 'Apenas uma reage ao estímulo luminoso'
                : respostaPupilarEscore === 2
                ? 'Nenhuma'
                : 'Reação bilateral ao estímulo'}
            </Option>
            <Icon name="chevron-down" />
          </ButtonSelect>
          <Button onPress={showResults}>
            <ButtonText>Calcular</ButtonText>
          </Button>
        </ScrollView>
      </Form>

      <Modalize ref={refModalAberturaOcular} snapPoint={500} rootStyle={{ elevation: 3 }}>
        <FlatList
          data={aberturaOcular}
          scrollEnabled={false}
          ListHeaderComponent={
            <HeaderModal>
              <Title> Abertura Ocular </Title>
            </HeaderModal>
          }
          ListFooterComponent={
            <Footer>
              <Button onPress={handleCloseModalAbertura}>
                <ButtonText>Selecionar</ButtonText>
              </Button>
            </Footer>
          }
          style={{ flex: 1, width: '100%' }}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <GlasgowOptions
              onPress={() => setAberturaEscore(item.escore)}
              isActive={aberturaEscore === item.escore}
            >
              <NameOptions>
                {item.name} - {item.escore}
              </NameOptions>
            </GlasgowOptions>
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </Modalize>

      <Modalize ref={refModalRespostaMotora} snapPoint={600} rootStyle={{ elevation: 3 }}>
        <HeaderModal>
          <Title> Resposta Motora </Title>
        </HeaderModal>
        <FlatList
          data={respostaMotora}
          style={{ flex: 1, width: '100%' }}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <GlasgowOptions
              onPress={() => setRespostaMotoraEscore(item.escore)}
              isActive={respostaMotoraEscore === item.escore}
            >
              <NameOptions>
                {item.name} - {item.escore}
              </NameOptions>
            </GlasgowOptions>
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
        <Footer>
          <Button onPress={handleCloseModalRespostaMotora}>
            <ButtonText>Selecionar</ButtonText>
          </Button>
        </Footer>
      </Modalize>

      <Modalize ref={refModalRespostaVerbal} snapPoint={500} rootStyle={{ elevation: 3 }}>
        <HeaderModal>
          <Title> Resposta Verbal </Title>
        </HeaderModal>
        <FlatList
          data={respostaVerbal}
          style={{ flex: 1, width: '100%' }}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <GlasgowOptions
              onPress={() => setRespostaVerbalEscore(item.escore)}
              isActive={respostaVerbalEscore === item.escore}
            >
              <NameOptions>
                {item.name} - {item.escore}
              </NameOptions>
            </GlasgowOptions>
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
        <Footer>
          <Button onPress={handleCloseModalRespostaVerbal}>
            <ButtonText>Selecionar</ButtonText>
          </Button>
        </Footer>
      </Modalize>

      <Modalize ref={refModalRespostaPupilar} snapPoint={400} rootStyle={{ elevation: 3 }}>
        <HeaderModal>
          <Title> Resposta Pupilar </Title>
        </HeaderModal>
        <FlatList
          data={respostaPupilar}
          style={{ flex: 1, width: '100%' }}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <GlasgowOptions
              onPress={() => setRespostaPupilarEscore(item.escore)}
              isActive={respostaPupilarEscore === item.escore}
            >
              <NameOptions>
                {item.name} - {item.escore}
              </NameOptions>
            </GlasgowOptions>
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
        <Footer>
          <Button onPress={handleCloseModalRespostaPupilar}>
            <ButtonText>Selecionar</ButtonText>
          </Button>
        </Footer>
      </Modalize>

      <View>
        <Modal isVisible={modalVisible}>
          <View
            style={{
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ContainerModal onPress={showResults}>
              <TitleModal>RESULTADO</TitleModal>
              <TextModal>{resultadoFinal}</TextModal>
              <TextModal>
                {resultadoFinal >= 3 && resultadoFinal <= 8
                  ? 'Trauma Grave'
                  : resultadoFinal >= 9 && resultadoFinal <= 12
                  ? 'Trauma Moderado'
                  : resultadoFinal >= 13 && resultadoFinal <= 16
                  ? 'Trauma Leve'
                  : 'Dados Insuficientes'}
              </TextModal>
            </ContainerModal>
          </View>
        </Modal>
      </View>
    </Container>
  )
}
