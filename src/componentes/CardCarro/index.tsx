import "./styles.css"
import carroImg from "./../../assets/carro.png"
export default function CardCarro() {
    return (
        <>
            <main>
                <section>
                    <h2>Venha nos visitar</h2>
                    <div>
                        <img src={carroImg} alt="carro" />
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div>
                        <img src={carroImg} alt="carro" />
                        <p>Lorem ipsum dolor</p>
                    </div>
                </section>
            </main>
        </>
    );
}