import { footerDetails } from "@/data/footer";
import { orderInfo } from "@/data/orderInfo";
import SectionTitle from "./SectionTitle";

const OrderInfo: React.FC = () => {
    return (
        <section id="como-pedir" className="scroll-mt-24 py-10 lg:py-20">
            <div className="mb-10 text-center">
                <SectionTitle>
                    <h2 className="mb-4">Cómo hacer tu pedido</h2>
                </SectionTitle>
                <p className="text-foreground-accent">{orderInfo.intro}</p>
            </div>

            <ol className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {orderInfo.steps.map((step, index) => (
                    <li key={step.title} className="rounded-xl border border-border-subtle bg-surface p-6">
                        <span
                            aria-hidden="true"
                            className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-foreground"
                        >
                            {index + 1}
                        </span>
                        <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                        <p className="text-foreground-accent">{step.description}</p>
                    </li>
                ))}
            </ol>

            <div className="mt-6 grid grid-cols-1 gap-5 rounded-xl bg-hero-background p-6 md:grid-cols-2">
                <div>
                    <h3 className="mb-2 text-xl font-semibold">Entrega</h3>
                    <p className="font-medium">Punto fijo de entrega: {orderInfo.deliveryPoint}.</p>
                    <p className="mt-2 text-foreground-accent">{orderInfo.deliveryDetails}</p>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-semibold">Formas de pago</h3>
                    <ul className="list-inside list-disc text-foreground-accent">
                        {orderInfo.paymentMethods.map((method) => (
                            <li key={method}>{method}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
                {footerDetails.socials.whatsapp && (
                    <a
                        href={footerDetails.socials.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[#25D366] px-5 py-3 font-semibold text-[#17351F] transition-colors hover:bg-[#20BD5A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                    >
                        Escribir por WhatsApp
                    </a>
                )}
                {footerDetails.socials.instagram && (
                    <a
                        href={footerDetails.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-secondary px-5 py-3 font-semibold text-secondary transition-colors hover:bg-secondary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                    >
                        Abrir Instagram
                    </a>
                )}
            </div>
        </section>
    );
};

export default OrderInfo;
