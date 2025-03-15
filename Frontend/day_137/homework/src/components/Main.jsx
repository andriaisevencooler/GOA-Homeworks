import { Dog, Cat, Rat, Rabbit, Turtle, Bird } from 'lucide-react'
import React from 'react'

export default function Main() {
  return (
    <div className='w-full h-[90%] grid grid-cols-3 grid-rows-2 gap-[30px] p-[30px]'>
        <div className='bg-amber-200 rounded-[20px] p-[10px] flex flex-col overflow-y-scroll'>
            <div className='flex gap-[10px] items-center'>
                <Dog />
                <h1 className='font-semibold'>Dogs</h1>
            </div>
            <p>The dog is a domesticated descendant of the gray wolf. Also called the domestic dog, it was selectively bred from an extinct population of wolves during the Late Pleistocene by hunter-gatherers. The dog was the first species to be domesticated by humans, over 14,000 years ago and before the development of agriculture. Due to their long association with humans, dogs have gained the ability to thrive on a starch-rich diet that would be inadequate for other canids.</p>
        </div>
        <div className='bg-amber-200 rounded-[20px] p-[10px] flex flex-col overflow-y-scroll'>
            <div className='flex gap-[10px] items-center'>
                <Cat />
                <h1 className='font-semibold'>Cats</h1>
            </div>
            <p>The cat, also referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. It is commonly kept as a pet and farm cat, but also ranges freely as a feral cat avoiding human contact. It is valued by humans for companionship and its ability to kill vermin. Its retractable claws are adapted to killing small prey species such as mice and rats. It has a strong, flexible body, quick reflexes, and sharp teeth, and its night vision and sense of smell are well developed. It is a social species, but a solitary hunter and a crepuscular predator.</p>
        </div>
        <div className='bg-amber-200 rounded-[20px] p-[10px] flex flex-col overflow-y-scroll'>
            <div className='flex gap-[10px] items-center'>
                <Rat />
                <h1 className='font-semibold'>Rats</h1>
            </div>
            <p>Rats are various medium-sized, long-tailed rodents. Species of rats are found throughout the order Rodentia, but stereotypical rats are found in the genus Rattus. Other rat genera include Neotoma (pack rats), Bandicota (bandicoot rats) and Dipodomys (kangaroo rats).

Rats are typically distinguished from mice by their size. Usually the common name of a large muroid rodent will include the word "rat", while a smaller muroid's name will include "mouse". The common terms rat and mouse are not taxonomically specific. There are 56 known species of rats in the world.</p>
        </div>
        <div className='bg-amber-200 rounded-[20px] p-[10px] flex flex-col overflow-y-scroll'>
            <div className='flex gap-[10px] items-center'>
                <Rabbit />
                <h1 className='font-semibold'>Rabbits</h1>
            </div>
            <p>Rabbits are small mammals in the family Leporidae (which also includes the hares), which is in the order Lagomorpha (which also includes pikas). They are familiar throughout the world as a small herbivore, a prey animal, a domesticated form of livestock, and a pet, having a widespread effect on ecologies and cultures. The most widespread rabbit genera are Oryctolagus and Sylvilagus. The former, Oryctolagus, includes the European rabbit, Oryctolagus cuniculus, which is the ancestor of the hundreds of breeds of domestic rabbit and has been introduced on every continent except Antarctica. The latter, Sylvilagus, includes over 13 wild rabbit species, among them the cottontails and tapetis. Wild rabbits not included in Oryctolagus and Sylvilagus include several species of limited distribution, including the pygmy rabbit, volcano rabbit, and Sumatran striped rabbit.</p>
        </div>
        <div className='bg-amber-200 rounded-[20px] p-[10px] flex flex-col overflow-y-scroll'>
            <div className='flex gap-[10px] items-center'>
                <Turtle />
                <h1 className='font-semibold'>Turtles</h1>
            </div>
            <p>Sea turtles (superfamily Chelonioidea), sometimes called marine turtles, are reptiles of the order Testudines and of the suborder Cryptodira. The seven existing species of sea turtles are the flatback, green, hawksbill, leatherback, loggerhead, Kemp's ridley, and olive ridley. Six of the seven sea turtle species, all but the flatback, are present in U.S. waters, and are listed as endangered and/or threatened under the Endangered Species Act. All but the flatback turtle are listed as threatened with extinction globally on the IUCN Red List of Threatened Species. The flatback turtle is found only in the waters of Australia, Papua New Guinea, and Indonesia.</p>
        </div>
        <div className='bg-amber-200 rounded-[20px] p-[10px] flex flex-col overflow-y-scroll'>
            <div className='flex gap-[10px] items-center'>
                <Bird />
                <h1 className='font-semibold'>Birds</h1>
            </div>
            <p>Birds are a group of warm-blooded vertebrates constituting the class Aves (Latin: [ˈaːwεs]), characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton. Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) common ostrich. There are over 11,000 living species and they are split into 44 orders. More than half are passerine or "perching" birds. Birds have wings whose development varies according to species; the only known groups without wings are the extinct moa and elephant birds. Wings, which are modified forelimbs, gave birds the ability to fly, although further evolution has led to the loss of flight in some birds, including ratites, penguins, and diverse endemic island species. The digestive and respiratory systems of birds are also uniquely adapted for flight. Some bird species of aquatic environments, particularly seabirds and some waterbirds, have further evolved for swimming. The study of birds is called ornithology.</p>
        </div>
    </div>
  )
}
