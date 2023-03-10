import { Dispatch, SetStateAction } from "react"

export interface User {
    username: string    
}


export interface Context{
    // settings: Settings
    user: User | null
    setUser: Dispatch<SetStateAction<User | null>>
    // setSettings: Dispatch<SetStateAction<Settings>>
    // toggleDarkMode: () =>  void
    
  }

  export type NullableContext<T> = {
    [Prop in keyof T]?: T[Prop]
  }