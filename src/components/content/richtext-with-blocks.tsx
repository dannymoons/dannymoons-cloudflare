// import Text from 'components/content/Text'
// import { List, ListItem } from 'components/content/List'

// import {
//   DefaultNodeTypes,
//   SerializedBlockNode,
//   SerializedLinkNode,
//   SerializedHeadingNode,
//   SerializedTextNode,
//   SerializedListNode,
//   SerializedListItemNode
// } from '@payloadcms/richtext-lexical'
// import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
// import {
//   JSXConvertersFunction,
//   LinkJSXConverter,
//   RichText as RichTextWithoutBlocks
// } from '@payloadcms/richtext-lexical/react'
// import Heading from '@/components/content/Heading'
// import { Fragment } from 'react'
// import Link from 'next/link'

// import { cn } from '@/utilities/ui'
// import { AVAILABLE_BLOCKS, AvailableBlockNames, BlockTypes } from '@/payload/blocks/blocks'

// type NodeTypes =
//   | DefaultNodeTypes
//   | SerializedHeadingNode
//   | SerializedTextNode
//   | SerializedLinkNode
//   | SerializedListNode
//   | SerializedListItemNode
//   | SerializedBlockNode<BlockTypes>

// // Create base converters that handle text, headings, and lists
// const createBaseConverters = (): Partial<ReturnType<JSXConvertersFunction<NodeTypes>>> => ({
//   ...LinkJSXConverter,
//   heading: ({ node }) => (
//     <Heading>
//       {node.children.map((child, index) => {
//         switch (child.type) {
//           case 'text':
//             return <Fragment key={index}>{(child as SerializedTextNode).text}</Fragment>
//           case 'link':
//             return (
//               <Link className='underline' key={index} href={(child as SerializedLinkNode).fields.url || ''}>
//                 {(child as SerializedLinkNode).children.map((linkChild, linkIndex) => (
//                   <Fragment key={linkIndex}>
//                     {linkChild.type === 'text' ? (linkChild as SerializedTextNode).text : null}
//                   </Fragment>
//                 ))}
//               </Link>
//             )
//           default:
//             return null
//         }
//       })}
//     </Heading>
//   ),
//   paragraph: ({ node }) => (
//     <Text marginBottom={'lg'} className={cn('leading-relaxed md:leading-relaxed')}>
//       {node.children?.map((child, index) => {
//         switch (child.type) {
//           case 'text':
//             return <Fragment key={index}>{(child as SerializedTextNode).text}</Fragment>
//           case 'link':
//             return (
//               <Link className='underline' key={index} href={(child as SerializedLinkNode).fields.url || ''}>
//                 {(child as SerializedLinkNode).children.map((linkChild, linkIndex) => (
//                   <Fragment key={linkIndex}>
//                     {linkChild.type === 'text' ? (linkChild as SerializedTextNode).text : null}
//                   </Fragment>
//                 ))}
//               </Link>
//             )
//           default:
//             return null
//         }
//       })}
//     </Text>
//   ),
//   list: ({ node }) => (
//     <Fragment>
//       {node.children.length > 0 && (
//         <List listType={node.tag}>
//           {node.children.map((child: any, index: number) => {
//             return (
//               <ListItem key={index} className='my-2 text-lg @xl:text-xl'>
//                 {child.children.map((child: any) => {
//                   switch (child.type) {
//                     case 'text':
//                       return <Fragment key={child.text}>{child.text}</Fragment>
//                     case 'link':
//                       return (
//                         <Link className='underline' key={child.fields.url} href={child.fields.url || ''}>
//                           {child.children[0].text}
//                         </Link>
//                       )
//                     default:
//                       return null
//                   }
//                 })}
//               </ListItem>
//             )
//           })}
//         </List>
//       )}
//     </Fragment>
//   )
// })

// // Create block converters based on enabled blocks
// const createBlockConverters = (enabledBlocks: AvailableBlockNames[]) => {
//   const blockConverters: Record<string, any> = {}

//   enabledBlocks.forEach(blockName => {
//     if (blockName in AVAILABLE_BLOCKS) {
//       blockConverters[blockName] = ({ node }: { node: any }) => {
//         const Block = AVAILABLE_BLOCKS[blockName].component
//         return <Block {...node.fields} />
//       }
//     }
//   })

//   return blockConverters
// }

// const createConverters =
//   (enabledBlocks: AvailableBlockNames[]): JSXConvertersFunction<NodeTypes> =>
//   ({ defaultConverters }) => ({
//     ...defaultConverters,
//     ...createBaseConverters(),
//     blocks: createBlockConverters(enabledBlocks)
//   })

// interface RichTextWithBlocksProps {
//   data: SerializedEditorState
//   className?: string
//   enabledBlocks?: AvailableBlockNames[]
// }

// export const RichTextWithBlocks = ({
//   enabledBlocks = Object.keys(AVAILABLE_BLOCKS) as AvailableBlockNames[],
//   ...props
// }: RichTextWithBlocksProps) => {
//   return <RichTextWithoutBlocks converters={createConverters(enabledBlocks)} {...props} />
// }
