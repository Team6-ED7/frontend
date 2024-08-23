import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { apis } from "../../../../api/apis";
import axios from "axios";
import { toast } from "sonner";

export default function ModalSelectSpace({ isOpen, onOpenChange, areaSelected, date, setGetReservations }) {

  const handleReserve = () => {

    saveReservation()

  }

  const saveReservation = async () => {
    try {
      const { data } = await axios.post(apis.reservations.reservations, {

        userEmail: "example@mail.com",
        spaceName: areaSelected.name,
        startDate: `${date.year}-0${date.month}-${date.day}`,
        status: true

      }

      )
      if (data.status === "APPROVED") {
        toast.success(`Reservado correctamente`)
        setGetReservations(true)
      }
      onOpenChange(false)

    } catch (error) {

      console.log(error);
    }
  }
  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{areaSelected.typeSpace} - {areaSelected?.name}</ModalHeader>
            <ModalBody>
              <p>
                {areaSelected?.description}
              </p>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam pulvinar risus non risus hendrerit venenatis.
                Pellentesque sit amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
              </p> */}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" onPress={handleReserve}>
                Reservar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
