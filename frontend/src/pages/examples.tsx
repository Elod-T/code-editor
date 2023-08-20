import BaseLayout from "../layouts/baseLayout";

const examples = [
  {
    title: "Console Interceptor",
    description:
      "Intercept console.log() calls and display them in the browser.",
    url: "/share?name=Intercept+Demo&htmlCode=%3Cdiv+id%3D%22container%22%3E%0A++%3Ch1%3EHello+world%3C%2Fh1%3E%0A++%3Cp%3EClick+the+buttons+to+see+the+toast+notification%3C%2Fp%3E%0A++%3Cbutton+id%3D%22log%22%3ESend+console.log%3C%2Fbutton%3E%0A++%3Cbutton+id%3D%22warn%22%3ESend+console.warn%3C%2Fbutton%3E%0A++%3Cbutton+id%3D%22error%22%3ESend+console.error%3C%2Fbutton%3E%0A%3C%2Fdiv%3E&cssCode=html+%7B%0A++background-color%3A+white%0A%7D%0A%0Ah1+%7B%0A++font-weight%3A+900%3B%0A++font-size%3A+50px%3B%0A%7D%0A%0A%23container+%7B%0A++margin%3A+auto%3B%0A++width%3A+fit-content%3B%0A++text-align%3A+center%3B%0A%7D%0A&jsCode=const+logButton+%3D+document.getElementById%28%22log%22%29%3B%0AlogButton.addEventListener%28%22click%22%2C+%28%29+%3D%3E+%7B%0A++console.log%28%22button+clicked%22%29%0A%7D%29%0A%0Aconst+warnButton+%3D+document.getElementById%28%22warn%22%29%3B%0AwarnButton.addEventListener%28%22click%22%2C+%28%29+%3D%3E+%7B%0A++console.warn%28%22button+clicked%22%29%0A%7D%29%0A%0Aconst+errorButton+%3D+document.getElementById%28%22error%22%29%3B%0AerrorButton.addEventListener%28%22click%22%2C+%28%29+%3D%3E+%7B%0A++console.error%28%22button+clicked%22%29%0A%7D%29%0A",
  },
  {
    title: "Simple Calculator",
    description: "A simple calculator.",
    url: "/share?name=Simple+Calculator&htmlCode=%3Cdiv+class%3D%22grid%22%3E%0A++++++%3Cbutton+onclick%3D%22handleClick%28%271%27%29%22%3E1%3C%2Fbutton%3E%0A++++++%3Cbutton+onclick%3D%22handleClick%28%272%27%29%22%3E2%3C%2Fbutton%3E%0A++++++%3Cbutton+onclick%3D%22handleClick%28%273%27%29%22%3E3%3C%2Fbutton%3E%0A++++++%3Cbutton+onclick%3D%22handleClick%28%27%2B%27%29%22%3E%2B%3C%2Fbutton%3E%0A++++++%3Cbutton+onclick%3D%22handleClick%28%274%27%29%22%3E4%3C%2Fbutton%3E%0A++++++%3Cbutton+onclick%3D%22handleClick%28%275%27%29%22%3E5%3C%2Fbutton%3E%0A++++++%3Cbutton+onclick%3D%22handleClick%28%276%27%29%22%3E6%3C%2Fbutton%3E%0A++++++%3Cbutton+onclick%3D%22handleClick%28%27-%27%29%22%3E-%3C%2Fbutton%3E%0A++++++%3Cbutton+onclick%3D%22handleClick%28%277%27%29%22%3E7%3C%2Fbutton%3E%0A++++++%3Cbutton+onclick%3D%22handleClick%28%278%27%29%22%3E8%3C%2Fbutton%3E%0A++++++%3Cbutton+onclick%3D%22handleClick%28%279%27%29%22%3E9%3C%2Fbutton%3E%0A++++++%3Cbutton+onclick%3D%22handleClick%28%27*%27%29%22%3E*%3C%2Fbutton%3E%0A++++++%3Cdiv%3E%3C%2Fdiv%3E%0A++++++%3Cbutton+onclick%3D%22clearInput%28%29%22%3EC%3C%2Fbutton%3E%0A++++++%3Cbutton+onclick%3D%22calculate%28%29%22%3E%3D%3C%2Fbutton%3E%0A++++++%3Cbutton+onclick%3D%22handleClick%28%27%2F%27%29%22%3E%2F%3C%2Fbutton%3E%0A++++%3C%2Fdiv%3E&cssCode=.grid+%7B%0A++width%3A+300px%3B%0A++display%3A+grid%3B%0A++grid-template-columns%3A+repeat%284%2C+1fr%29%3B%0A++grid-gap%3A+10px%3B%0A%7D%0A&jsCode=let+input+%3D+%27%27%3B%0A++++++const+resultElement+%3D+document.createElement%28%27div%27%29%3B%0A++++++resultElement.classList.add%28%27result%27%29%3B%0A++++++document.body.appendChild%28resultElement%29%3B%0A%0A++++++function+handleClick%28value%29+%7B%0A++++++++input+%2B%3D+value%3B%0A++++++++resultElement.textContent+%3D+input%3B%0A++++++%7D%0A%0A++++++function+clearInput%28%29+%7B%0A++++++++input+%3D+%27%27%3B%0A++++++++resultElement.textContent+%3D+input%3B%0A++++++%7D%0A%0A++++++function+calculate%28%29+%7B%0A++++++++try+%7B%0A++++++++++const+result+%3D+eval%28input%29%3B%0A++++++++++resultElement.textContent+%3D+result%3B%0A++++++++++input+%3D+%27%27%3B%0A++++++++%7D+catch+%28error%29+%7B%0A++++++++++resultElement.textContent+%3D+%27Invalid+Expression%27%3B%0A++++++++%7D%0A++++++%7D",
  },
];

export default function Examples() {
  return (
    <BaseLayout>
      <div className="w-fit mx-auto text-fg">
        <h1 className="text-4xl mb-20">Examples</h1>

        <div className="flex flex-col gap-y-10">
          {examples.map((example, index) => (
            <div>
              <h2>
                #{index + 1} {example.title}
              </h2>
              <p>{example.description}</p>
              <a href={example.url}>Open</a>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
