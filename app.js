/* =========================================
   ZAANSTRAAT 314 · TAREAS — app.js
   - Toggle sections
   - Progress tracking (saved to localStorage)
   - Language switcher (ES / IT / EN)
   ========================================= */

// ---- TRANSLATIONS ----
const TRANSLATIONS = {
  es: {
    subtitle: "Todo lo que hay que hacer antes, durante y después de la entrega.",
    progress: "Progreso general",
    footer_sub: "Una casa, un proyecto, dos genios.",
    pinterest: "Referencias Pinterest:",
    s1title: "Papeles, contrato y notario",
    s1desc: "Contrato, cláusulas, notario, VvE y documentos legales.",
    s1sub1: "Contrato de compra",
    s1sub2: "Notario",
    s1sub3: "VvE y documentos legales",
    s2title: "Financiero, hipoteca y seguros",
    s2desc: "Hipoteca, taxatie, bank guarantee, seguro de vida y presupuesto total.",
    s2sub1: "Hipoteca",
    s2sub2: "Taxatie y bank guarantee",
    s2sub3: "Seguro de vida",
    s2sub4: "Presupuesto total",
    s3title: "Técnico, inspección y reparaciones",
    s3desc: "Informe técnico, reparaciones al vendedor, final inspection y seguridad básica.",
    s3sub1: "Informe técnico",
    s3sub2: "Reparaciones a pedir al vendedor",
    s3sub3: "Final inspection",
    s3sub4: "Seguridad básica",
    s4title: "Remodelación inicial",
    s4desc: "Suelo, cocina, baño, pintura, pared acústica y referencias de estilo.",
    s4sub1: "Estrategia general",
    s4sub2: "Suelo beneden (~55 m²)",
    s4sub3: "Suelo de cocina",
    s4sub4: "Cocina",
    s4sub5: "Baño actual",
    s4sub6: "Pared acústica / Oficina 2",
    s4sub7: "Pintura",
    s5title: "Muebles, storage y santuario",
    s5desc: "Dormitorio, living, oficina, entrada y estrategia de storage.",
    s5sub1: "Dormitorio principal",
    s5sub2: "Living",
    s5sub3: "Oficina beneden",
    s5sub4: "Entrada / hal",
    s6title: "Mudanza y transición",
    s6desc: "Marnixkade, movers, registro y administración post-mudanza.",
    s6sub1: "Marnixkade",
    s6sub2: "Mudanza",
    s6sub3: "Registro y administración",
    t_revisar_contrato: "Revisar la versión final del contrato / koopovereenkomst.",
    t_confirmar_fecha: "Confirmar que la fecha estimada de entrega sea alrededor del 15 de agosto de 2026.",
    t_financing_condition: "Revisar que la financing condition refleje la financiación real: ~€630.000 + bouwdepot €30.000.",
    t_clausulas: "Revisar cláusulas clave: non-self-occupancy, age clause, asbestos, foundation waiver, owner-occupancy, resale restriction, fire-rated ceiling, splitsingstekening.",
    t_source_funds: "Completar source of funds form y PEP statement.",
    t_embajador: "Preguntar en privado al notario sobre el caso del tío embajador (WWFT/KYC).",
    t_firma_notario: "Confirmar documentos a firmar, monto a transferir y nota van afrekening antes de la transferencia.",
    t_erfpacht: "Confirmar erfpacht: canon prepaid hasta 31 dic 2059 y posibles costes por cambio de uso.",
    t_vve_costes: "Pedir confirmación escrita de VvE sobre costes del proyecto de sostenibilidad / verduurzaming, préstamo colectivo, derrama y cuota mensual.",
    t_vve_reserve: "Pedir estado actualizado del reserve fund y confirmación del share del vendedor.",
    t_vve_normas: "Confirmar normas exactas de suelo acústico, permisos para obras, horarios, ruido y uso de escalera.",
    t_monto_hipoteca: "Confirmar con Edwin monto objetivo: ~€630.000 + €30.000 bouwdepot y mejores condiciones bancarias.",
    t_simulaciones: "Revisar simulaciones con y sin bouwdepot: tipo de interés, cuota mensual, duración fija.",
    t_bouwdepot: "Confirmar qué obras cubre el bouwdepot: suelo, cocina, electricidad, pladur acústico, baño, mejoras energéticas.",
    t_taxatie: "Confirmar que la taxatie considere valor post-reforma si hay bouwdepot. Preparar lista de obras justificadas.",
    t_bank_guarantee: "Confirmar deadline, monto (10% del precio), coste y coordinación de la bank guarantee con notario.",
    t_seguro_vida: "Revisar oferta TAF (€300k/€400k/€500k) y decidir cobertura. Confirmar condiciones, cancelación y cuestionario médico.",
    t_presupuesto_compra: "Armar presupuesto completo de compra: precio, notario, taxatie, advisor, bank guarantee, mudanza, renovación, muebles, buffer.",
    t_presupuesto_fases: "Armar presupuesto de obras por fases: antes de mudanza / 3 meses / 1 año / 4-5 años / largo plazo.",
    t_informe_guardar: "Guardar informe técnico final y compartirlo con Edwin y contratistas relevantes.",
    t_informe_revision: "Revisar con Edwin si algo del informe justifica pedir reparación o compensación al vendedor.",
    t_boiler_factura: "Pedir factura reciente de mantenimiento de boiler antes de la transferencia.",
    t_reparaciones_ducha: "Pedir reparación de juntas/sellado y baldosa rota de ducha, o compensación de €650.",
    t_final_inspection: "Revisar boiler, calefacción, agua, electricidad, ventanas, baño, medidores, llaves. Sacar fotos y videos. Confirmar que la casa esté vacía.",
    t_detectores: "Comprar e instalar detectores de humo en cada planta y CO detector cerca del boiler.",
    t_cerraduras: "Revisar y cambiar cilindros de cerraduras si hace falta.",
    t_estrategia: "Definir qué se hace antes de mudanza (suelo beneden, cocina, pintura, seguridad) y qué puede esperar.",
    t_suelo_medidas: "Confirmar medidas exactas de woonkamer, oficina beneden y hal. Verificar si el suelo está vlak en egaal.",
    t_suelo_vve: "Confirmar norma VvE de acústica exacta (dB/ΔLlin/ΔLw) y si el sistema debe aprobarse antes de instalar.",
    t_suelo_presupuestos: "Pedir presupuestos para subestructura: Fermacell, corcho acústico, underlay tipo Firstfloor Goldline. Comparar altura, precio, plazo.",
    t_suelo_showroom: "buscar inspiración de color y acabado de suelo (roble claro, multiplank, visgraat, tono cálido no gris)",
    t_suelo_muestras: "Pedir muestras grandes para ver con luz real en la casa. Confirmar misma partida (zelfde batchnummer) para 55 m².",
    t_cocina_azulejo_ref: "buscar azulejos off-white, ivory, limestone look, travertine, marmerlook cálido (60x60 / 60x120)",
    t_cocina_azulejo_tienda: "Ver azulejos en vivo. Confirmar mismo tono y calibre. Coordinar transición con suelo de woonkamer.",
    t_cocina_ref: "buscar cocinas IKEA METOD off-white/shaker, backsplash verde menta/sage, electrodomésticos integrados",
    t_cocina_medidas: "Subir fotos y medidas: largo, ancho, altura, ventana, puerta balcón, agua/gas/ventilación. Diseñar cocina IKEA METOD.",
    t_cocina_electro: "Confirmar que la instalación eléctrica single-phase alcanza para inducción, horno, lavavajillas. Decidir electrodomésticos.",
    t_cocina_presupuesto: "Pedir presupuesto IKEA y de instalación. Confirmar disponibilidad, plazos y garantías.",
    t_banio_reparaciones: "Reparar juntas/sellado ducha y baldosa rota. Mejorar ventilación. Cambiar espejo, luz y accesorios si es barato.",
    t_pared_ref: "buscar separaciones con pladur acústico, puertas sólidas y high glass / transom en livingrooms",
    t_pared_vve: "Consultar VvE si se requiere permiso para pared de pladur. Pedir presupuesto: metal studs + mineral wool + doble placa.",
    t_pintura_ref: "buscar interiores en warm white / ivory / off-white con luz natural cálida",
    t_pintura_mateo: "Pedir presupuesto a Mateo. Confirmar si se pinta antes o después del suelo y cómo protegerlo.",
    t_dormitorio_ref: "buscar dormitorios-santuario con telas, luces cálidas, cortinas de techo, estilo quiet luxury",
    t_dormitorio_cama: "Planificar cama 160 cm (IKEA Mandal u otra con storage). Medir y diseñar walk-in closet.",
    t_living_ref: "buscar livings estilo 1920s Balanced Cozy / Quiet Luxury con proyector, plantas y alfombra azul/malva",
    t_living_layout: "Ubicar IKEA LANDSKRONA verde claro y alfombra azul/turquesa/malva. Definir zona proyector, lámparas y plantas.",
    t_oficina_layout: "Ubicar escritorio sit-stand de Filippo. Alfombra Anders en oficina. Definir storage cerrado e iluminación de trabajo.",
    t_entrada_ref: "buscar entradas estrechas con zapatero de madera/vintage, perchero, espejo y bandeja de llaves",
    t_entrada_zapatero: "Buscar zapatero estrecho, cálido, de madera o vintage. Medir profundidad junto al radiador.",
    t_marnixkade: "Confirmar fecha hasta la que conservamos el cuarto. Decidir si mantenerlo algunas semanas durante las obras. Planear ritual de cierre.",
    t_movers: "Pedir presupuestos de movers. Confirmar lift, escalera y permisos de estacionamiento.",
    t_caja_primera_noche: "Preparar caja de primera noche: sábanas, toallas, cargadores, medicinas, documentos, café/té, herramientas básicas, detector CO/humo.",
    t_coordinar_mudanza: "Coordinar fecha de mudanza con instalación de suelo y cocina. Empacar por zonas y etiquetar cajas.",
    t_registro: "Registrarse en la nueva dirección en gemeente dentro del plazo contractual.",
    t_cambio_direccion: "Cambiar dirección en banco, trabajo, seguros, médico/farmacia. Contratar energía, internet y agua.",
    t_documentos_digitales: "Guardar todos los documentos digitales en carpeta organizada. Confirmar contactos VvE.",
  },
  it: {
    subtitle: "Tutto quello da fare prima, durante e dopo la consegna.",
    progress: "Progresso generale",
    footer_sub: "Una casa, un progetto, due geni.",
    pinterest: "Riferimenti Pinterest:",
    s1title: "Documenti, contratto e notaio",
    s1desc: "Contratto, clausole, notaio, VvE e documenti legali.",
    s1sub1: "Contratto di acquisto",
    s1sub2: "Notaio",
    s1sub3: "VvE e documenti legali",
    s2title: "Finanze, mutuo e assicurazioni",
    s2desc: "Mutuo, taxatie, bank guarantee, assicurazione vita e budget totale.",
    s2sub1: "Mutuo",
    s2sub2: "Taxatie e bank guarantee",
    s2sub3: "Assicurazione vita",
    s2sub4: "Budget totale",
    s3title: "Tecnico, ispezione e riparazioni",
    s3desc: "Rapporto tecnico, riparazioni al venditore, ispezione finale e sicurezza base.",
    s3sub1: "Rapporto tecnico",
    s3sub2: "Riparazioni da chiedere al venditore",
    s3sub3: "Ispezione finale",
    s3sub4: "Sicurezza base",
    s4title: "Ristrutturazione iniziale",
    s4desc: "Pavimento, cucina, bagno, pittura, parete acustica e riferimenti di stile.",
    s4sub1: "Strategia generale",
    s4sub2: "Pavimento piano terra (~55 m²)",
    s4sub3: "Pavimento cucina",
    s4sub4: "Cucina",
    s4sub5: "Bagno attuale",
    s4sub6: "Parete acustica / Ufficio 2",
    s4sub7: "Pittura",
    s5title: "Mobili, storage e santuario",
    s5desc: "Camera da letto, soggiorno, ufficio, ingresso e strategia di storage.",
    s5sub1: "Camera da letto principale",
    s5sub2: "Soggiorno",
    s5sub3: "Ufficio piano terra",
    s5sub4: "Ingresso / hal",
    s6title: "Trasloco e transizione",
    s6desc: "Marnixkade, trasloco, registrazione e amministrazione post-trasloco.",
    s6sub1: "Marnixkade",
    s6sub2: "Trasloco",
    s6sub3: "Registrazione e amministrazione",
    t_revisar_contrato: "Rivedere la versione finale del contratto / koopovereenkomst.",
    t_confirmar_fecha: "Confermare che la data di consegna prevista sia intorno al 15 agosto 2026.",
    t_financing_condition: "Verificare che la financing condition rispecchi il finanziamento reale: ~€630.000 + bouwdepot €30.000.",
    t_clausulas: "Rivedere le clausole chiave: non-self-occupancy, age clause, asbestos, foundation waiver, owner-occupancy, resale restriction, fire-rated ceiling, splitsingstekening.",
    t_source_funds: "Completare il source of funds form e la PEP statement.",
    t_embajador: "Chiedere in privato al notaio del caso dello zio ambasciatore (WWFT/KYC).",
    t_firma_notario: "Confermare documenti da firmare, importo da trasferire e nota van afrekening prima del passaggio.",
    t_erfpacht: "Confermare erfpacht: canone prepagato fino al 31 dic 2059 e possibili costi per cambio d'uso.",
    t_vve_costes: "Richiedere conferma scritta dalla VvE sui costi del progetto di sostenibilità, prestito collettivo, deroga e quota mensile.",
    t_vve_reserve: "Richiedere lo stato aggiornato del fondo riserva e conferma della quota del venditore.",
    t_vve_normas: "Confermare le norme esatte per il pavimento acustico, permessi per lavori, orari, rumore e uso delle scale.",
    t_monto_hipoteca: "Confermare con Edwin l'importo obiettivo: ~€630.000 + €30.000 bouwdepot e le migliori condizioni bancarie.",
    t_simulaciones: "Rivedere le simulazioni con e senza bouwdepot: tasso d'interesse, rata mensile, durata fissa.",
    t_bouwdepot: "Confermare cosa copre il bouwdepot: pavimento, cucina, elettricità, cartongesso acustico, bagno, miglioramenti energetici.",
    t_taxatie: "Confermare che la taxatie consideri il valore post-lavori se c'è bouwdepot. Preparare lista lavori giustificativi.",
    t_bank_guarantee: "Confermare scadenza, importo (10% del prezzo), costo e coordinamento della bank guarantee con il notaio.",
    t_seguro_vida: "Rivedere offerta TAF (€300k/€400k/€500k) e decidere la copertura. Confermare condizioni, recesso e questionario medico.",
    t_presupuesto_compra: "Costruire budget completo di acquisto: prezzo, notaio, taxatie, advisor, bank guarantee, trasloco, ristrutturazione, mobili, buffer.",
    t_presupuesto_fases: "Costruire budget lavori per fasi: prima del trasloco / 3 mesi / 1 anno / 4-5 anni / lungo termine.",
    t_informe_guardar: "Salvare il rapporto tecnico finale e condividerlo con Edwin e i contractor rilevanti.",
    t_informe_revision: "Verificare con Edwin se qualcosa nel rapporto giustifica richiedere riparazioni o compensazione al venditore.",
    t_boiler_factura: "Richiedere fattura recente di manutenzione della caldaia prima del passaggio.",
    t_reparaciones_ducha: "Richiedere riparazione di fughe/sigillatura e piastrella rotta della doccia, o compensazione di €650.",
    t_final_inspection: "Verificare caldaia, riscaldamento, acqua, elettricità, finestre, bagno, contatori, chiavi. Scattare foto e video. Confermare che la casa sia vuota.",
    t_detectores: "Acquistare e installare rilevatori di fumo ad ogni piano e rilevatore CO vicino alla caldaia.",
    t_cerraduras: "Verificare e cambiare le serrature se necessario.",
    t_estrategia: "Definire cosa fare prima del trasloco (pavimento, cucina, pittura, sicurezza) e cosa può aspettare.",
    t_suelo_medidas: "Confermare le misure esatte di woonkamer, ufficio piano terra e ingresso. Verificare se il pavimento è vlak en egaal.",
    t_suelo_vve: "Confermare la norma VvE acustica esatta (dB/ΔLlin/ΔLw) e se il sistema va approvato prima dell'installazione.",
    t_suelo_presupuestos: "Richiedere preventivi per la sottostruttura: Fermacell, sughero acustico, underlay tipo Firstfloor Goldline. Confrontare altezza, prezzo, tempi.",
    t_suelo_showroom: "cercare ispirazione di colore e finitura pavimento (rovere chiaro, multiplank, visgraat, tono caldo non grigio)",
    t_suelo_muestras: "Richiedere campioni grandi da vedere con la luce reale in casa. Confermare stesso lotto (zelfde batchnummer) per 55 m².",
    t_cocina_azulejo_ref: "cercare piastrelle off-white, ivory, limestone look, travertine, marmerlook caldo (60x60 / 60x120)",
    t_cocina_azulejo_tienda: "Vedere le piastrelle di persona. Confermare stessa tinta e calibro. Coordinare la transizione con il pavimento del soggiorno.",
    t_cocina_ref: "cercare cucine IKEA METOD off-white/shaker, backsplash verde menta/salvia, elettrodomestici integrati",
    t_cocina_medidas: "Caricare foto e misure: lunghezza, larghezza, altezza, finestra, porta balcone, acqua/gas/ventilazione. Progettare cucina IKEA METOD.",
    t_cocina_electro: "Confermare che l'impianto elettrico monofase regge induzione, forno e lavastoviglie. Scegliere gli elettrodomestici.",
    t_cocina_presupuesto: "Richiedere preventivo IKEA e di installazione. Confermare disponibilità, tempi e garanzie.",
    t_banio_reparaciones: "Riparare fughe/sigillatura doccia e piastrella rotta. Migliorare ventilazione. Cambiare specchio, luce e accessori se economico.",
    t_pared_ref: "cercare divisori con cartongesso acustico, porte solide e vetrate / transom nei soggiorni",
    t_pared_vve: "Consultare la VvE se serve permesso per parete in cartongesso. Richiedere preventivo: profili metallici + lana minerale + doppia lastra.",
    t_pintura_ref: "cercare interni in warm white / ivory / off-white con luce naturale calda",
    t_pintura_mateo: "Richiedere preventivo a Mateo. Confermare se si dipinge prima o dopo il pavimento e come proteggerlo.",
    t_dormitorio_ref: "cercare camere-santuario con tessuti, luci calde, tende a soffitto, stile quiet luxury",
    t_dormitorio_cama: "Pianificare letto 160 cm (IKEA Mandal o altro con storage). Misurare e progettare walk-in closet.",
    t_living_ref: "cercare soggiorni stile 1920s Balanced Cozy / Quiet Luxury con proiettore, piante e tappeto azzurro/malva",
    t_living_layout: "Posizionare IKEA LANDSKRONA verde chiaro e tappeto azzurro/turchese/malva. Definire zona proiettore, lampade e piante.",
    t_oficina_layout: "Posizionare scrivania sit-stand di Filippo. Tappeto Anders nell'ufficio. Definire storage chiuso e illuminazione da lavoro.",
    t_entrada_ref: "cercare ingressi stretti con scarpiera in legno/vintage, appendiabiti, specchio e vassoio porta chiavi",
    t_entrada_zapatero: "Cercare scarpiera stretta, calda, in legno o vintage. Misurare la profondità disponibile vicino al radiatore.",
    t_marnixkade: "Confermare fino a quando teniamo la stanza. Decidere se mantenerla alcune settimane durante i lavori. Pianificare rituale di chiusura.",
    t_movers: "Richiedere preventivi per il trasloco. Confermare ascensore, scala e permessi di parcheggio.",
    t_caja_primera_noche: "Preparare la scatola della prima notte: lenzuola, asciugamani, caricatori, medicine, documenti, caffè/tè, attrezzi base, rilevatore CO/fumo.",
    t_coordinar_mudanza: "Coordinare la data di trasloco con l'installazione del pavimento e della cucina. Fare i pacchi per stanza e etichettare.",
    t_registro: "Registrarsi al nuovo indirizzo presso il gemeente entro il termine contrattuale.",
    t_cambio_direccion: "Cambiare indirizzo in banca, lavoro, assicurazioni, medico/farmacia. Attivare energia, internet e acqua.",
    t_documentos_digitales: "Salvare tutti i documenti digitali in una cartella organizzata. Confermare i contatti VvE.",
  },
  en: {
    subtitle: "Everything to do before, during and after the transfer.",
    progress: "Overall progress",
    footer_sub: "One house, one project, two genies.",
    pinterest: "Pinterest references:",
    s1title: "Paperwork, contract & notary",
    s1desc: "Contract, clauses, notary, VvE and legal documents.",
    s1sub1: "Purchase agreement",
    s1sub2: "Notary",
    s1sub3: "VvE and legal documents",
    s2title: "Finances, mortgage & insurance",
    s2desc: "Mortgage, taxatie, bank guarantee, life insurance and full budget.",
    s2sub1: "Mortgage",
    s2sub2: "Taxatie and bank guarantee",
    s2sub3: "Life insurance",
    s2sub4: "Full budget",
    s3title: "Technical, inspection & repairs",
    s3desc: "Technical report, repairs from seller, final inspection and basic safety.",
    s3sub1: "Technical report",
    s3sub2: "Repairs to request from seller",
    s3sub3: "Final inspection",
    s3sub4: "Basic safety",
    s4title: "Initial renovation",
    s4desc: "Floors, kitchen, bathroom, paint, acoustic wall and style references.",
    s4sub1: "General strategy",
    s4sub2: "Ground floor (~55 m²)",
    s4sub3: "Kitchen floor",
    s4sub4: "Kitchen",
    s4sub5: "Current bathroom",
    s4sub6: "Acoustic wall / Office 2",
    s4sub7: "Paint",
    s5title: "Furniture, storage & sanctuary",
    s5desc: "Bedroom, living room, office, hallway and storage strategy.",
    s5sub1: "Master bedroom",
    s5sub2: "Living room",
    s5sub3: "Ground floor office",
    s5sub4: "Entrance / hal",
    s6title: "Moving & transition",
    s6desc: "Marnixkade, movers, registration and post-move admin.",
    s6sub1: "Marnixkade",
    s6sub2: "Moving",
    s6sub3: "Registration and admin",
    t_revisar_contrato: "Review the final version of the purchase agreement / koopovereenkomst.",
    t_confirmar_fecha: "Confirm that the estimated transfer date is around 15 August 2026.",
    t_financing_condition: "Check that the financing condition reflects the real financing: ~€630,000 + bouwdepot €30,000.",
    t_clausulas: "Review key clauses: non-self-occupancy, age clause, asbestos, foundation waiver, owner-occupancy, resale restriction, fire-rated ceiling, splitsingstekening.",
    t_source_funds: "Complete the source of funds form and PEP statement.",
    t_embajador: "Ask the notary privately about the uncle ambassador case (WWFT/KYC).",
    t_firma_notario: "Confirm documents to sign, amount to transfer and nota van afrekening before the transfer.",
    t_erfpacht: "Confirm erfpacht: canon prepaid until 31 Dec 2059 and possible costs for change of use.",
    t_vve_costes: "Request written confirmation from VvE on costs of the sustainability project, collective loan, special levy and monthly fee.",
    t_vve_reserve: "Request updated reserve fund status and confirmation of seller's share.",
    t_vve_normas: "Confirm exact VvE rules on acoustic floors, permits for works, working hours, noise and stairwell use.",
    t_monto_hipoteca: "Confirm with Edwin the target amount: ~€630,000 + €30,000 bouwdepot and best bank conditions.",
    t_simulaciones: "Review simulations with and without bouwdepot: interest rate, monthly payment, fixed period.",
    t_bouwdepot: "Confirm what works bouwdepot covers: floor, kitchen, electrics, acoustic drywall, bathroom, energy improvements.",
    t_taxatie: "Confirm taxatie accounts for post-renovation value if bouwdepot applies. Prepare justified works list.",
    t_bank_guarantee: "Confirm deadline, amount (10% of price), cost and coordination of bank guarantee with notary.",
    t_seguro_vida: "Review TAF offer (€300k/€400k/€500k) and decide coverage. Confirm conditions, cancellation and medical questionnaire.",
    t_presupuesto_compra: "Build full purchase budget: price, notary, taxatie, advisor, bank guarantee, moving, renovation, furniture, buffer.",
    t_presupuesto_fases: "Build phased works budget: before moving / 3 months / 1 year / 4-5 years / long term.",
    t_informe_guardar: "Save final technical report and share with Edwin and relevant contractors.",
    t_informe_revision: "Review with Edwin whether anything in the report justifies requesting repairs or compensation from the seller.",
    t_boiler_factura: "Request recent boiler maintenance invoice before the transfer.",
    t_reparaciones_ducha: "Request repair of shower grout/sealing and broken tile, or €650 compensation.",
    t_final_inspection: "Check boiler, heating, water, electricity, windows, bathroom, meters, keys. Take photos and videos. Confirm house is empty.",
    t_detectores: "Buy and install smoke detectors on each floor and CO detector near the boiler.",
    t_cerraduras: "Check and replace lock cylinders if needed.",
    t_estrategia: "Define what to do before moving (ground floor, kitchen, paint, safety) and what can wait.",
    t_suelo_medidas: "Confirm exact measurements of woonkamer, ground floor office and hallway. Check if floor is vlak en egaal.",
    t_suelo_vve: "Confirm exact VvE acoustic standard (dB/ΔLlin/ΔLw) and whether the system must be approved before installation.",
    t_suelo_presupuestos: "Request quotes for substructure: Fermacell, acoustic cork, underlay like Firstfloor Goldline. Compare height, price, lead time.",
    t_suelo_showroom: "search for floor color and finish inspiration (light oak, multiplank, herringbone, warm non-grey tones)",
    t_suelo_muestras: "Request large samples to see under real light in the house. Confirm same batch (zelfde batchnummer) for 55 m².",
    t_cocina_azulejo_ref: "search for off-white, ivory, limestone look, travertine, warm marble-look tiles (60x60 / 60x120)",
    t_cocina_azulejo_tienda: "See tiles in person. Confirm same shade and calibre. Coordinate transition with living room floor.",
    t_cocina_ref: "search for IKEA METOD off-white/shaker kitchens, sage/mint backsplash, integrated appliances",
    t_cocina_medidas: "Upload photos and measurements: length, width, height, window, balcony door, water/gas/ventilation. Design IKEA METOD kitchen.",
    t_cocina_electro: "Confirm single-phase electrical can handle induction, oven and dishwasher simultaneously. Choose appliances.",
    t_cocina_presupuesto: "Request IKEA and installation quotes. Confirm availability, lead times and warranties.",
    t_banio_reparaciones: "Repair shower grout/sealing and broken tile. Improve ventilation. Replace mirror, light and accessories if cheap.",
    t_pared_ref: "search for acoustic drywall partitions, solid doors and high glass / transom in living rooms",
    t_pared_vve: "Check with VvE if permit is needed for drywall partition. Request quote: metal studs + mineral wool + double board.",
    t_pintura_ref: "search for warm white / ivory / off-white interiors with warm natural light",
    t_pintura_mateo: "Request quote from Mateo. Confirm whether to paint before or after floor and how to protect it.",
    t_dormitorio_ref: "search for sanctuary bedrooms with fabrics, warm lights, ceiling curtains, quiet luxury style",
    t_dormitorio_cama: "Plan 160 cm bed (IKEA Mandal or other with storage). Measure and design walk-in closet.",
    t_living_ref: "search for 1920s Balanced Cozy / Quiet Luxury living rooms with projector, plants and blue/mauve rug",
    t_living_layout: "Position IKEA LANDSKRONA in light green and blue/turquoise/mauve rug. Define projector zone, lamps and plants.",
    t_oficina_layout: "Position Filippo's sit-stand desk. Anders rug in office. Define closed storage and task lighting.",
    t_entrada_ref: "search for narrow hallways with wood/vintage shoe rack, coat rack, mirror and key tray",
    t_entrada_zapatero: "Find a narrow, warm, wood or vintage shoe rack. Measure available depth next to radiator.",
    t_marnixkade: "Confirm how long we keep the room. Decide whether to keep it a few weeks during works. Plan closing ritual.",
    t_movers: "Request moving quotes. Confirm lift access, stairwell and parking permits.",
    t_caja_primera_noche: "Pack first-night box: sheets, towels, chargers, medicine, documents, coffee/tea, basic tools, CO/smoke detector.",
    t_coordinar_mudanza: "Coordinate moving date with floor and kitchen installation. Pack by room and label boxes.",
    t_registro: "Register at new address with the gemeente within the contractual deadline.",
    t_cambio_direccion: "Update address at bank, work, insurance, doctor/pharmacy. Set up energy, internet and water.",
    t_documentos_digitales: "Save all digital documents in an organised folder. Confirm VvE contact details.",
  }
};

// ---- STATE ----
let currentLang = localStorage.getItem('zaan-lang') || 'es';
let checkStates = JSON.parse(localStorage.getItem('zaan-checks') || '{}');

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  restoreChecks();
  updateAllProgress();
  setActiveLangBtn(currentLang);

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      currentLang = lang;
      localStorage.setItem('zaan-lang', lang);
      applyLanguage(lang);
      setActiveLangBtn(lang);
    });
  });

  // Checkboxes
  document.querySelectorAll('.task-check').forEach((cb, idx) => {
    cb.addEventListener('change', () => {
      checkStates[idx] = cb.checked;
      localStorage.setItem('zaan-checks', JSON.stringify(checkStates));
      updateAllProgress();
    });
  });
});

// ---- TOGGLE SECTION ----
function toggleSection(id) {
  const list = document.getElementById('list-' + id);
  const chev = document.getElementById('chev-' + id);
  const isOpen = list.classList.contains('open');

  if (isOpen) {
    list.classList.remove('open');
    chev.classList.remove('open');
  } else {
    list.classList.add('open');
    chev.classList.add('open');
  }
}

// ---- LANGUAGE ----
function applyLanguage(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });
  document.documentElement.lang = lang;
}

function setActiveLangBtn(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ---- CHECKBOXES RESTORE ----
function restoreChecks() {
  document.querySelectorAll('.task-check').forEach((cb, idx) => {
    if (checkStates[idx]) {
      cb.checked = true;
    }
  });
}

// ---- PROGRESS ----
function updateAllProgress() {
  const sections = ['papeles', 'financiero', 'tecnico', 'remodelacion', 'muebles', 'mudanza'];
  let totalDone = 0;
  let totalAll = 0;

  sections.forEach(sectionId => {
    const boxes = document.querySelectorAll(`.task-check[data-section="${sectionId}"]`);
    const done = Array.from(boxes).filter(cb => cb.checked).length;
    const all = boxes.length;
    totalDone += done;
    totalAll += all;

    const pct = all > 0 ? Math.round((done / all) * 100) : 0;
    const bar = document.getElementById('bar-' + sectionId);
    const label = document.getElementById('pct-' + sectionId);
    if (bar) bar.style.width = pct + '%';
    if (label) label.textContent = pct + '%';
  });

  const globalPct = totalAll > 0 ? Math.round((totalDone / totalAll) * 100) : 0;
  const globalBar = document.getElementById('globalBar');
  const globalLabel = document.getElementById('globalPct');
  if (globalBar) globalBar.style.width = globalPct + '%';
  if (globalLabel) globalLabel.textContent = globalPct + '%';
}
