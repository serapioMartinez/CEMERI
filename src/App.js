import logo from './logo.svg';
//import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    const check = document.getElementById("check");
    check.onchange =  ()=>{
      console.log(check.checked)
      if(check.checked==true){
        document.querySelector(".bottom").style.top="4rem";
      }else{
        document.querySelector(".bottom").style.top="-100%";
      }
    }
    window.onscroll= ()=>{
      if(window.screen.width<=770){
        return;
      }
      const component = document.querySelector('.bottom');
      if( window.scrollY>70){
        component.style.position= "fixed";
        component.style.top=0;
      }else{
        component.style.position= "relative";        
      }
    }
  },[]);
  return (
    <div className="App">
      <Header/>
      <div>
      El Fondo Internacional de Desarrollo Agrícola (IFAD por sus siglas en inglés), es una institución financiera y organismo especializado de Naciones Unidas; su sede se encuentra en Roma, Italia, dentro del Centro para la Alimentación y la Agricultura de las Naciones Unidas. Desde su fundación en 1978 han proporcionado alrededor de 23,200 millones de dólares en subsidios y préstamos con bajo interés a proyectos que han ayudado aproximadamente a 518 millones de personas. [1]

El IFAD invierte principalmente en la población rural, empoderándola para que aumente su seguridad alimentaria, mejore la nutrición de las familias y se incrementen sus ingresos. Este Fondo ayuda a crear resiliencia, ampliar negocios y a que tengan mayor autonomía. Tres cuartas partes de las personas más pobres del mundo viven en zonas rurales de países en desarrollo, la mayoría de estas dependen de la agricultura. [2]

Según datos del IFAD [3], para 2030 es posible que el cambio climático, el aumento de la población y la volatilidad de los precios en los alimentos y energías, empujen a millones de personas en situaciones vulnerables a la pobreza y hambre extrema. Con una población mundial en aumento y que superará los 9.000 millones de personas para 2050 [4], una brecha cada vez mayor entre los ricos y pobres, y una competencia considerable  por los recursos; los problemas a los que se enfrenta la humanidad no pueden esperar.     

El IFAD trabaja en los lugares donde la pobreza y el hambre son más profundas: en las regiones más remotas de los países en desarrollo y en situación de fragilidad, donde generalmente pocos organismos de desarrollo se adentran. Se ha enfocado en crear  un enfoque rentable, centrado en las personas y orientado a la colaboración que da resultados. La agricultura a pequeña escala es un elemento central de su modelo de desarrollo, que conecta a las mujeres y hombres en situación de pobreza de las zonas rurales con los mercados y servicios para que así tengan la oportunidad de cultivar más y a su vez, tener mayores ganancias. 

La agricultura es un instrumento (comprobado) para la reducción de la pobreza; el crecimiento del PIB generado por la agricultura es más eficaz para reducir la pobreza. Por ejemplo, en África subsahariana, el crecimiento de la agricultura reduce la pobreza hasta 11 veces más rápido que el crecimiento de otros sectores [5]. Los proyectos apoyados por el IFAD han demostrado que, con acceso a la financiación, los mercados, la tecnología y la información, las poblaciones rurales pueden salir por sí mismas de la pobreza. [6] 

Además de ayudar a las poblaciones rurales a crecer y generar más ingresos, el IFAD promueve la igualdad de género y la inclusión, ayuda a desarrollar la capacidad de organización de las comunidades locales y refuerza la resiliencia al cambio climático. 
      </div>
      <div>
      El Fondo Internacional de Desarrollo Agrícola (IFAD por sus siglas en inglés), es una institución financiera y organismo especializado de Naciones Unidas; su sede se encuentra en Roma, Italia, dentro del Centro para la Alimentación y la Agricultura de las Naciones Unidas. Desde su fundación en 1978 han proporcionado alrededor de 23,200 millones de dólares en subsidios y préstamos con bajo interés a proyectos que han ayudado aproximadamente a 518 millones de personas. [1]

El IFAD invierte principalmente en la población rural, empoderándola para que aumente su seguridad alimentaria, mejore la nutrición de las familias y se incrementen sus ingresos. Este Fondo ayuda a crear resiliencia, ampliar negocios y a que tengan mayor autonomía. Tres cuartas partes de las personas más pobres del mundo viven en zonas rurales de países en desarrollo, la mayoría de estas dependen de la agricultura. [2]

Según datos del IFAD [3], para 2030 es posible que el cambio climático, el aumento de la población y la volatilidad de los precios en los alimentos y energías, empujen a millones de personas en situaciones vulnerables a la pobreza y hambre extrema. Con una población mundial en aumento y que superará los 9.000 millones de personas para 2050 [4], una brecha cada vez mayor entre los ricos y pobres, y una competencia considerable  por los recursos; los problemas a los que se enfrenta la humanidad no pueden esperar.     

El IFAD trabaja en los lugares donde la pobreza y el hambre son más profundas: en las regiones más remotas de los países en desarrollo y en situación de fragilidad, donde generalmente pocos organismos de desarrollo se adentran. Se ha enfocado en crear  un enfoque rentable, centrado en las personas y orientado a la colaboración que da resultados. La agricultura a pequeña escala es un elemento central de su modelo de desarrollo, que conecta a las mujeres y hombres en situación de pobreza de las zonas rurales con los mercados y servicios para que así tengan la oportunidad de cultivar más y a su vez, tener mayores ganancias. 

La agricultura es un instrumento (comprobado) para la reducción de la pobreza; el crecimiento del PIB generado por la agricultura es más eficaz para reducir la pobreza. Por ejemplo, en África subsahariana, el crecimiento de la agricultura reduce la pobreza hasta 11 veces más rápido que el crecimiento de otros sectores [5]. Los proyectos apoyados por el IFAD han demostrado que, con acceso a la financiación, los mercados, la tecnología y la información, las poblaciones rurales pueden salir por sí mismas de la pobreza. [6] 

Además de ayudar a las poblaciones rurales a crecer y generar más ingresos, el IFAD promueve la igualdad de género y la inclusión, ayuda a desarrollar la capacidad de organización de las comunidades locales y refuerza la resiliencia al cambio climático. 
      </div>
      <div>
      El Fondo Internacional de Desarrollo Agrícola (IFAD por sus siglas en inglés), es una institución financiera y organismo especializado de Naciones Unidas; su sede se encuentra en Roma, Italia, dentro del Centro para la Alimentación y la Agricultura de las Naciones Unidas. Desde su fundación en 1978 han proporcionado alrededor de 23,200 millones de dólares en subsidios y préstamos con bajo interés a proyectos que han ayudado aproximadamente a 518 millones de personas. [1]

El IFAD invierte principalmente en la población rural, empoderándola para que aumente su seguridad alimentaria, mejore la nutrición de las familias y se incrementen sus ingresos. Este Fondo ayuda a crear resiliencia, ampliar negocios y a que tengan mayor autonomía. Tres cuartas partes de las personas más pobres del mundo viven en zonas rurales de países en desarrollo, la mayoría de estas dependen de la agricultura. [2]

Según datos del IFAD [3], para 2030 es posible que el cambio climático, el aumento de la población y la volatilidad de los precios en los alimentos y energías, empujen a millones de personas en situaciones vulnerables a la pobreza y hambre extrema. Con una población mundial en aumento y que superará los 9.000 millones de personas para 2050 [4], una brecha cada vez mayor entre los ricos y pobres, y una competencia considerable  por los recursos; los problemas a los que se enfrenta la humanidad no pueden esperar.     

El IFAD trabaja en los lugares donde la pobreza y el hambre son más profundas: en las regiones más remotas de los países en desarrollo y en situación de fragilidad, donde generalmente pocos organismos de desarrollo se adentran. Se ha enfocado en crear  un enfoque rentable, centrado en las personas y orientado a la colaboración que da resultados. La agricultura a pequeña escala es un elemento central de su modelo de desarrollo, que conecta a las mujeres y hombres en situación de pobreza de las zonas rurales con los mercados y servicios para que así tengan la oportunidad de cultivar más y a su vez, tener mayores ganancias. 

La agricultura es un instrumento (comprobado) para la reducción de la pobreza; el crecimiento del PIB generado por la agricultura es más eficaz para reducir la pobreza. Por ejemplo, en África subsahariana, el crecimiento de la agricultura reduce la pobreza hasta 11 veces más rápido que el crecimiento de otros sectores [5]. Los proyectos apoyados por el IFAD han demostrado que, con acceso a la financiación, los mercados, la tecnología y la información, las poblaciones rurales pueden salir por sí mismas de la pobreza. [6] 

Además de ayudar a las poblaciones rurales a crecer y generar más ingresos, el IFAD promueve la igualdad de género y la inclusión, ayuda a desarrollar la capacidad de organización de las comunidades locales y refuerza la resiliencia al cambio climático. 
      </div>
      <div>
      El Fondo Internacional de Desarrollo Agrícola (IFAD por sus siglas en inglés), es una institución financiera y organismo especializado de Naciones Unidas; su sede se encuentra en Roma, Italia, dentro del Centro para la Alimentación y la Agricultura de las Naciones Unidas. Desde su fundación en 1978 han proporcionado alrededor de 23,200 millones de dólares en subsidios y préstamos con bajo interés a proyectos que han ayudado aproximadamente a 518 millones de personas. [1]

El IFAD invierte principalmente en la población rural, empoderándola para que aumente su seguridad alimentaria, mejore la nutrición de las familias y se incrementen sus ingresos. Este Fondo ayuda a crear resiliencia, ampliar negocios y a que tengan mayor autonomía. Tres cuartas partes de las personas más pobres del mundo viven en zonas rurales de países en desarrollo, la mayoría de estas dependen de la agricultura. [2]

Según datos del IFAD [3], para 2030 es posible que el cambio climático, el aumento de la población y la volatilidad de los precios en los alimentos y energías, empujen a millones de personas en situaciones vulnerables a la pobreza y hambre extrema. Con una población mundial en aumento y que superará los 9.000 millones de personas para 2050 [4], una brecha cada vez mayor entre los ricos y pobres, y una competencia considerable  por los recursos; los problemas a los que se enfrenta la humanidad no pueden esperar.     

El IFAD trabaja en los lugares donde la pobreza y el hambre son más profundas: en las regiones más remotas de los países en desarrollo y en situación de fragilidad, donde generalmente pocos organismos de desarrollo se adentran. Se ha enfocado en crear  un enfoque rentable, centrado en las personas y orientado a la colaboración que da resultados. La agricultura a pequeña escala es un elemento central de su modelo de desarrollo, que conecta a las mujeres y hombres en situación de pobreza de las zonas rurales con los mercados y servicios para que así tengan la oportunidad de cultivar más y a su vez, tener mayores ganancias. 

La agricultura es un instrumento (comprobado) para la reducción de la pobreza; el crecimiento del PIB generado por la agricultura es más eficaz para reducir la pobreza. Por ejemplo, en África subsahariana, el crecimiento de la agricultura reduce la pobreza hasta 11 veces más rápido que el crecimiento de otros sectores [5]. Los proyectos apoyados por el IFAD han demostrado que, con acceso a la financiación, los mercados, la tecnología y la información, las poblaciones rurales pueden salir por sí mismas de la pobreza. [6] 

Además de ayudar a las poblaciones rurales a crecer y generar más ingresos, el IFAD promueve la igualdad de género y la inclusión, ayuda a desarrollar la capacidad de organización de las comunidades locales y refuerza la resiliencia al cambio climático. 
      </div>
      <Footer/>
    </div>
  );
}

export default App;
