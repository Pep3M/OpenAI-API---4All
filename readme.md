# Servidor en Express para modelos de OpenAI

Este repositorio proporciona un servidor en [Express](https://expressjs.com/) que permite interactuar de forma sencilla con los modelos de [OpenAI](https://openai.com/).

## Instalación

Para utilizar este servidor, primero debes tener instalado [Node.js](https://nodejs.org/) en tu sistema. Una vez que tengas Node.js instalado, clona este repositorio en tu sistema y ejecuta el siguiente comando en la carpeta del repositorio:

```
npm install
```

Este comando instalará todas las dependencias necesarias para ejecutar el servidor.

Luego, deberá crear un archivo `.env` en la raiz de este repositorio para almacenar su API Key y organizacion. Esta la deberá obtener previamente de [OpenAI](https://beta.openai.com/signup/ "https://beta.openai.com/signup/").

#### .env

```
OPENAI_API_KEY=tuApiKey
ORGANIZATION=tuOrganizacion
```

## Uso

Si no tienes una clave API de OpenAI (tal vez vives en una region restringida) puedes usar esta API que funciona como espejo de la original, sin necesidad de instalar este repositorio o tener alguna clave API. 

Dirige todas tus peticiones al siguiente endpoint:

[https://openai4all.onrender.com](https://openai4all.onrender.com "https://openai4all.onrender.com")



Si en cambio, quieres utilizar este repositorio como servidor propio, ejecuta el siguiente comando en la carpeta del repositorio para iniciarlo:

```
npm start
```

Una vez que el servidor se haya iniciado, puedes interactuar con él mediante las siguientes rutas de la API:

* `/v1/completions`: Permite obtener sugerencias de texto para completar una frase o un párrafo dado. Esta función es útil cuando se quiere generar texto de forma automática, como en un sistema de escritura asistida o en un chatbot.
  * Peticion (`POST`):

    ```
    {
      "message": "este es el concepto de color explicado a un chico"
    }
    ```
  * Respuesta:

    ```
    {
      "id": "cmpl-6M6ZqmmbuXTctqNwch52gjWl23vZP",
      "object": "text_completion",
      "created": 1670726518,
      "model": "text-davinci-003",
      "choices": [
        {
          "text": " de 5 años\n\nEl color es algo que nos ayuda a ver el mundo de una manera más bonita. El color es como una pintura que se pone en los objetos para que se vean diferentes. Por ejemplo, el cielo es azul, las flores son rosas y las hojas son verdes. El color nos ayuda a distinguir una cosa de otra.",
          "index": 0,
          "logprobs": null,
          "finish_reason": "stop"
        }
      ],
      "usage": {
        "prompt_tokens": 14,
        "completion_tokens": 104,
        "total_tokens": 118
      }
    }
    ```

Aun faltan varios modulos por agregar, los cuales se iran incorporando poco a poco

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo [LICENSE](https://chat.openai.com/LICENSE) para obtener más detalles

## Agradecimientos

Quisiera agradecer a [OpenAI](https://twitter.com/OpenAI "@OpenAI") por permitir utilizar su API en este proyecto. También quiero agradecer a [Erich Garcia](https://twitter.com/ErichGarciaCruz "@ErichGarciaCruz") por algunos tips que me proporcionó. Finalmente, quiero dar las gracias a todas las personas que de una forma u otra colaboraron en el desarrollo de este proyecto.

## Contacto

Si tienes alguna duda o sugerencia sobre este proyecto, puedes contactarme a través de las siguientes redes sociales:

* Twitter: [@Pep3Marquez](https://twitter.com/Pep3Marquez "https://twitter.com/Pep3Marquez")
* LinkedIn: [jose-e-marquez/](https://www.linkedin.com/in/jose-e-marquez/ "https://www.linkedin.com/in/jose-e-marquez/")

También puedes ver más de mis proyectos en mi perfil de GitHub: [PepeM](https://github.com/Pep3M/ "https://github.com/Pep3M/")

Espero que este proyecto te sea de utilidad. ¡Gracias por descargarlo!
