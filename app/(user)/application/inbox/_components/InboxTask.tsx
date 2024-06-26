"use client";
import type { Task } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InboxTask({ tasks }: { tasks: Task[] }) {
  const handlePriority = (priority: string) => {
    if (priority === "high") {
      return "bg-red-400";
    } else if (priority === "medium") {
      return "bg-yellow-400";
    } else if (priority === "low") {
      return "bg-green-400";
    }
  };
  return (
    <div className="flex flex-col pb-4 gap-y-4">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 100,
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.8,
            }}
            key={index}
            className={task.isComplete ? 'hidden' : ''}
          >
            <h2
              className={`p-4 ${
                index === 0 ? "border-b-2" : "border-y-2"
              } my-2 font-semibold border-black`}
            >
              {task.deadline_at.toDateString()}
            </h2>
            <div className="flex flex-col px-4 gap-y-2">
              <Link
                className="w-full border-2 border-black rounded-md p-2 cursor-grab"
                key={index}
                href={"/application/task/" + task.id}
              >
                <div className="pb-1 border-b-2 border-black flex flex-row items-center gap-x-2">
                  <span
                    className={`w-[20px] h-[10px] ${handlePriority(
                      task.priority
                    )} block`}
                  ></span>
                  <h2 className="text-xl font-semibold">{task.title}</h2>
                </div>
                <small className="font-semibold text-green-400 mt-2 mb-1 block"> {task.isComplete ? "Completed" : ""}</small>
                <p className="text-base font-medium">{task.description?.substring(0,100)}{String(task.description).length < 100 ? '' : '...'}</p>
                <small>See more ~</small>
              </Link>
            </div>
          </motion.div>
        ))
      ) : (
        <div className="grow w-full h-full flex flex-col items-center mt-10 font-medium">
          No task yet
        </div>
      )}
    </div>
  );
}
