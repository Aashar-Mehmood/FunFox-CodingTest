import React, { useState } from "react";

import { firebaseDb } from "../firebase";
import {
  getDocs,
  getDoc,
  collection,
  setDoc,
  doc,
  query,
  where,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import useData from "./useData";
import useAuth from "./useAuth";
export default function useFireStore() {
  const { setTasksData, setDataForFilter } = useData();
  const [userGroups, setUserGroups] = useState([]);
  const [userGroupError, setUserGroupError] = useState("");
  const { setGroupId } = useAuth();
  async function getUserGroups() {
    try {
      const docRef = collection(firebaseDb, "userGroup");
      const docSnap = await getDocs(docRef);

      setUserGroups(
        docSnap?.docs?.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    } catch (error) {
      setUserGroupError(error);
    }
  }

  async function getUserGroup(uId) {
    const docRef = doc(firebaseDb, "users", uId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  }

  async function addUserInDb(uId, groupId, name) {
    await setDoc(doc(firebaseDb, "users", uId), { groupId, name });
  }

  async function getTasks(groupId) {
    const q = query(
      collection(firebaseDb, "tasks"),
      where("groupId", "==", groupId)
    );

    const querySnapshot = await getDocs(q);
    setTasksData(
      querySnapshot?.docs?.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      })
    );
    setDataForFilter(
      querySnapshot?.docs?.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      })
    );
  }
  async function createTask(data) {
    await addDoc(collection(firebaseDb, "tasks"), { ...data });
  }
  async function updateTask(taskId, data) {
    const taskRef = doc(firebaseDb, "tasks", taskId);

    await updateDoc(taskRef, { ...data });
  }

  async function deleteTask(taskId) {
    await deleteDoc(doc(firebaseDb, "tasks", taskId));
  }

  return {
    getUserGroups,
    getUserGroup,
    userGroups,
    userGroupError,
    addUserInDb,
    getTasks,
    createTask,
    updateTask,
    deleteTask,
  };
}
