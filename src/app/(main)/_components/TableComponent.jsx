"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar2,
  GalleryAdd,
  Location,
  NoteText,
  ProfileCircle,
  Status,
} from "iconsax-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import romanticDate from "@/data/romanticDate";
import { useState } from "react";

export default function TableComponent() {
  const [isEditMemory, setIsEditMemory] = useState(false);
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 mb-10">
          <div className="mt-2">
            <Calendar2 size="32" color="#309898" />
          </div>

          <div className="text-[32px] font-[500] ">
            <span className="text-custom-green ">MY </span>
            <span className="text-custom-red">Dating </span>
            <span className="text-custom-green">Schedule</span>
          </div>
        </div>
        {/* <button className="bg-teal-600 text-white px-4 py-2 rounded">
          New Memory
        </button> */}
        <Dialog>
          <DialogTrigger
            onClick={() => setIsEditMemory(false)}
            className="bg-teal-600 py-2 mb-5 px-10 ml-[900px] text-white rounded"
          >
            New Memory
          </DialogTrigger>
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl mb-3">
                Create New Romantic Plan
              </DialogTitle>
              {!isEditMemory ? (
                <DialogDescription>
                  <div className="mb-8">
                    <div className="flex gap-1">
                      <Location size="20" color="#94a3b8" />
                      <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                        Location
                      </label>
                    </div>
                    <input
                      type="email"
                      placeholder="Female"
                      className="w-[459px] p-2  bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="mb-8">
                    <div className="flex gap-1">
                      <Calendar2 size="20" color="#94a3b8" />
                      <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                        Date
                      </label>
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your desire place to go"
                      className="w-[459px] p-2  bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="mb-8">
                    <div className="flex gap-1">
                      <GalleryAdd size="20" color="#94a3b8" />
                      <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                        Gallery
                      </label>
                    </div>
                    <input
                      type="email"
                      placeholder="Choose from file"
                      className="w-[459px] p-2  bg-[#F8FAFC] text-[#27445D] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="mb-8">
                    <div className="flex gap-1">
                      <NoteText size="20" color="#94a3b8" />
                      <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                        Details
                      </label>
                    </div>
                    <input
                      type="email"
                      placeholder="Type some detail"
                      className="w-[459px] align-top text- p-2 h-[120px] bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <button className="bg-teal-600 text-white w-[470px] h-[52px] rounded-xl">
                    Create
                  </button>
                </DialogDescription>
              ) : (
                <DialogDescription>
                  <div className="mb-8">
                    <div className="flex gap-1">
                      <Location size="20" color="#94a3b8" />
                      <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                        Location
                      </label>
                    </div>
                    <input
                      type="email"
                      placeholder="Female"
                      className="w-[459px] p-2  bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="mb-8">
                    <div className="flex gap-1">
                      <Calendar2 size="20" color="#94a3b8" />
                      <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                        Date
                      </label>
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your desire place to go"
                      className="w-[459px] p-2  bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="mb-8">
                    <div className="flex gap-1">
                      <GalleryAdd size="20" color="#94a3b8" />
                      <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                        Gallery
                      </label>
                    </div>
                    <input
                      type="email"
                      placeholder="Choose from file"
                      className="w-[459px] p-2  bg-[#F8FAFC] text-[#27445D] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="mb-8">
                    <div className="flex gap-1">
                      <NoteText size="20" color="#94a3b8" />
                      <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                        Details
                      </label>
                    </div>
                    <input
                      type="email"
                      placeholder="Type some detail"
                      className="w-[459px] align-top text- p-2 h-[120px] bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <button className="bg-teal-600 text-white w-[470px] h-[52px] rounded-xl">
                    Edit
                  </button>
                </DialogDescription>
              )}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Where we are going</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>What we plan to do</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {romanticDate.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.plan}</TableCell>
              <TableCell className=" ">{item.status}</TableCell>
              <TableCell>
                <button className="mr-2 inline-flex items-center px-3 py-1 text-xs font-medium text-[#FF9F00] bg-yellow-100   rounded-lg ">
                  View
                </button>
                <Dialog>
                  <DialogTrigger
                    onClick={() => setIsEditMemory(true)}
                    className="bg-teal-600 py-1 text-xs mb-5 px-5 mr-2  text-white rounded-lg "
                  >
                    Edit
                  </DialogTrigger>
                  <DialogContent className="">
                    <DialogHeader>
                      <DialogTitle className="text-center text-2xl mb-3">
                        Create New Romantic Plan
                      </DialogTitle>
                      {!isEditMemory ? (
                        <DialogDescription>
                          <div className="mb-8">
                            <div className="flex gap-1">
                              <Location size="20" color="#94a3b8" />
                              <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                                Location
                              </label>
                            </div>
                            <input
                              type="email"
                              placeholder="Female"
                              className="w-[459px] p-2  bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                          </div>
                          <div className="mb-8">
                            <div className="flex gap-1">
                              <Calendar2 size="20" color="#94a3b8" />
                              <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                                Date
                              </label>
                            </div>
                            <input
                              type="email"
                              placeholder="Enter your desire place to go"
                              className="w-[459px] p-2  bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                          </div>
                          <div className="mb-8">
                            <div className="flex gap-1">
                              <GalleryAdd size="20" color="#94a3b8" />
                              <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                                Gallery
                              </label>
                            </div>
                            <input
                              type="email"
                              placeholder="Choose from file"
                              className="w-[459px] p-2  bg-[#F8FAFC] text-[#27445D] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                          </div>
                          <div className="mb-8">
                            <div className="flex gap-1">
                              <NoteText size="20" color="#94a3b8" />
                              <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                                Details
                              </label>
                            </div>
                            <input
                              type="email"
                              placeholder="Type some detail"
                              className="w-[459px] align-top text- p-2 h-[120px] bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                          </div>
                          <button className="bg-teal-600 text-white w-[470px] h-[52px] rounded-xl">
                            Create
                          </button>
                        </DialogDescription>
                      ) : (
                        <DialogDescription>
                          <div className="mb-8">
                            <div className="flex gap-1">
                              <Location size="20" color="#94a3b8" />
                              <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                                Location
                              </label>
                            </div>
                            <input
                              type="email"
                              placeholder="Female"
                              className="w-[459px] p-2  bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                          </div>
                          <div className="mb-8">
                            <div className="flex gap-1">
                              <Calendar2 size="20" color="#94a3b8" />
                              <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                                Date
                              </label>
                            </div>
                            <input
                              type="email"
                              placeholder="Enter your desire place to go"
                              className="w-[459px] p-2  bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                          </div>
                          <div className="mb-8">
                            <div className="flex gap-1">
                              <GalleryAdd size="20" color="#94a3b8" />
                              <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                                Gallery
                              </label>
                            </div>
                            <input
                              type="email"
                              placeholder="Choose from file"
                              className="w-[459px] p-2  bg-[#F8FAFC] text-[#27445D] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                          </div>
                          <div className="mb-8">
                            <div className="flex gap-1">
                              <Status size="32" color="#94a3b8" />
                              <GalleryAdd size="20" color="#94a3b8" />{" "}
                              <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                                Status
                              </label>
                            </div>
                            <input
                              type="email"
                              placeholder="Choose from file"
                              className="w-[459px] p-2  bg-[#F8FAFC] text-[#27445D] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                          </div>

                          <div className="mb-8">
                            <div className="flex gap-1">
                              <NoteText size="20" color="#94a3b8" />
                              <label className="block text-[#94A3B8] font-normal  text-base mb-1">
                                Details
                              </label>
                            </div>
                            <input
                              type="email"
                              placeholder="Type some detail"
                              className="w-[459px] align-top text- p-2 h-[120px] bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                          </div>
                          <button className="bg-teal-600 text-white w-[470px] h-[52px] rounded-xl">
                            Edit
                          </button>
                        </DialogDescription>
                      )}
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <button className="inline-flex items-center px-3 py-1 text-xs font-medium text-[#CB0404] bg-red-100   rounded-lg">
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
