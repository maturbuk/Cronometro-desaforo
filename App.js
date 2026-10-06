import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { numero: 0, botao: 'VAI!', ultimo: null }

    // variável do timer

    this.timer = null

    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  vai() {
    if (this.timer != null) {
      //aqui vai parar o timer
      clearInterval(this.timer)
      this.timer = null
      this.setState({ botao: 'VAI!' })
    } else // dispara timer
    {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100)
      this.setState({ botao: 'PAUSAR' })
    }
  }

  limpar() {
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null
    }

    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'VAI!',
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.relogioArea}>
          <Image
            source={require('./src/cronometro.png')}
            style={styles.cronometro}
          />

          <View style={styles.visor}>
            <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
          </View>
        </View>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaUltima}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0
              ? 'Último tempo: ' + this.state.ultimo.toFixed(2)
              : ''}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2e2e2e',
  },
  timer: {
    fontSize: 80,
    color: '#fff',
    fontWeight: 'bold',
  },

  relogioArea: {
    width: '95%',
    maxWidth: 500,
    aspectRatio: 1,
    position: 'relative',
  },

  cronometro: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  visor: {
    position: 'absolute',
    left: '36%',
    top: '39%',
    width: '51%',
    height: '49%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnArea: {
    flexDirection: 'row',
    width: '90%',
    maxWidth: 460,
    marginTop: 20,
  },

  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 45,
    marginHorizontal: 10,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#454545',
  },
  areaUltima: {
    marginTop: 40,
  },

  textoCorrida: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff',
  },
})

export default App
