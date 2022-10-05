import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export const useSettings = () => useContext(SettingsContext);
