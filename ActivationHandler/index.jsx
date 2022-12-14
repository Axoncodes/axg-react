import { useEffect } from "react"
import { loadScript } from "../../lib/script"

export default function ActivationHandler() {
  useEffect(() => {
    loadScript(`${process.env.Axg}/layoutactivationJs`)
    .then(() => activationHandler.init())
  }, [])
  return '';
}